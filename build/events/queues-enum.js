"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.GuestQueues = exports.MailQueues = void 0;
var MailQueues;
(function (MailQueues) {
    MailQueues["REGISTERED"] = "user:registered";
    MailQueues["FORGOT_PASSWORD"] = "user:forgot-password";
    MailQueues["PASSWORD_HAS_BEEN_RESET"] = "user:password-has-been-reset";
})(MailQueues = exports.MailQueues || (exports.MailQueues = {}));
var GuestQueues;
(function (GuestQueues) {
    GuestQueues["EXPIRE_GUEST_USER"] = "expire:guest-user";
    GuestQueues["GUEST_USER_EXPIRED"] = "guest-user:expired";
})(GuestQueues = exports.GuestQueues || (exports.GuestQueues = {}));
