export declare enum MailQueues {
    REGISTERED = "user:registered",
    FORGOT_PASSWORD = "user:forgot-password",
    PASSWORD_HAS_BEEN_RESET = "user:password-has-been-reset"
}
export declare enum GuestQueues {
    EXPIRE_GUEST_USER = "expire:guest-user",
    GUEST_USER_EXPIRED = "guest-user:expired"
}
export declare enum LogQueues {
    LOG_INFO = "log:info"
}
