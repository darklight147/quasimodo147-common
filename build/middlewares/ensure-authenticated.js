"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureAuthenticated = void 0;
const unauthorized_error_1 = require("../errors/unauthorized-error");
const ensureAuthenticated = (req, res, next) => {
    if (!req.currentUser) {
        throw new unauthorized_error_1.UnauthorizedException();
    }
    next();
};
exports.ensureAuthenticated = ensureAuthenticated;
