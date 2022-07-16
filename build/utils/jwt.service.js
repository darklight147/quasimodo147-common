"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
class JwtService {
    constructor(options) {
        this.options = options;
        this.EXPIRE_REFRESH = '90d';
    }
    asyncVerify(token, secret, options) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.verify(token, secret, Object.assign(Object.assign({}, this.options), options), (err, payload) => {
                if (err) {
                    return reject(err);
                }
                return resolve(payload);
            });
        });
    }
    asyncSign(payload, secret, options) {
        return new Promise((resolve, reject) => {
            jsonwebtoken_1.default.sign(payload, secret, Object.assign(Object.assign({}, this.options), options), (err, payload) => {
                if (err) {
                    return reject(err);
                }
                return resolve(payload);
            });
        });
    }
    sign(payload) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return yield this.asyncSign(payload, process.env.JWT_SECRET);
            }
            catch (error) {
                return null;
            }
        });
    }
    verify(token) {
        return __awaiter(this, void 0, void 0, function* () {
            if (!token)
                return null;
            try {
                return yield this.asyncVerify(token, process.env.JWT_SECRET);
            }
            catch (error) {
                return null;
            }
        });
    }
    signRefresh(payload) {
        return this.asyncSign(payload, process.env.JWT_REFRESH_SECRET, Object.assign(Object.assign({}, this.options), { expiresIn: this.EXPIRE_REFRESH }));
    }
    verifyRefreshToken(token) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return (yield this.asyncVerify(token, process.env.JWT_REFRESH_SECRET, this.options));
            }
            catch (error) {
                return null;
            }
        });
    }
    isTokenExpired(token) {
        const decoded = jsonwebtoken_1.default.decode(token);
        const exp = decoded.exp * 1000;
        const now = Date.now();
        return now > exp;
    }
}
exports.default = new JwtService({
    expiresIn: '15m',
});
