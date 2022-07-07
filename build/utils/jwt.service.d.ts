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
    sign(payload: Payload): string;
    verify(token: string): Payload | null;
    signRefresh(payload: RefreshPayload): string;
    verifyRefreshToken(token: string): RefreshPayload | null;
    isTokenExpired(token: string): boolean;
}
declare const _default: JwtService;
export default _default;
