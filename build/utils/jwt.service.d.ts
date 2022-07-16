import jwt from 'jsonwebtoken';
interface Payload {
    username: string;
    id: string;
    roles: string[];
}
interface RefreshPayload {
    id: string;
}
declare class JwtService {
    private options;
    private EXPIRE_REFRESH;
    constructor(options: jwt.SignOptions & jwt.VerifyOptions);
    private asyncVerify;
    private asyncSign;
    sign(payload: Payload): Promise<string | null>;
    verify(token: string): Promise<Payload | null>;
    signRefresh(payload: RefreshPayload): Promise<string>;
    verifyRefreshToken(token: string): Promise<RefreshPayload | null>;
    isTokenExpired(token: string): boolean;
}
declare const _default: JwtService;
export default _default;
