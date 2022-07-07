"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ensureRole = void 0;
const forbidden_error_1 = require("../errors/forbidden-error");
const unauthorized_error_1 = require("../errors/unauthorized-error");
const ensureRole = (roles) => {
    return (req, res, next) => {
        if (!req.currentUser) {
            throw new unauthorized_error_1.UnauthorizedException();
        }
        const userRoles = req.currentUser.roles;
        const hasRole = roles.some((role) => userRoles.includes(role));
        if (!hasRole) {
            throw new forbidden_error_1.ForbiddenException("You don't have permission to do this");
        }
        next();
    };
};
exports.ensureRole = ensureRole;
