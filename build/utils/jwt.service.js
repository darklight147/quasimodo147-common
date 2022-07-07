"use strict";
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
    sign(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_SECRET, Object.assign({}, this.options));
    }
    verify(token) {
        if (!token) {
            return null;
        }
        try {
            return jsonwebtoken_1.default.verify(token, process.env.JWT_SECRET, Object.assign({}, this.options));
        }
        catch (error) {
            return null;
        }
    }
    signRefresh(payload) {
        return jsonwebtoken_1.default.sign(payload, process.env.JWT_REFRESH_SECRET, Object.assign(Object.assign({}, this.options), { expiresIn: this.EXPIRE_REFRESH }));
    }
    verifyRefreshToken(token) {
        try {
            return jsonwebtoken_1.default.verify(token, process.env.JWT_REFRESH_SECRET, Object.assign({}, this.options));
        }
        catch (error) {
            return null;
        }
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
