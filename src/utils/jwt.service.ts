import jwt, { JwtPayload } from 'jsonwebtoken';

interface Payload {
	username: string;
	id: string;
	roles: string[];
}

interface RefreshPayload {
	id: string;
}

class JwtService {
	private EXPIRE_REFRESH = '90d';

	constructor(private options: jwt.SignOptions & jwt.VerifyOptions) {}

	public sign(payload: Payload) {
		return jwt.sign(payload, process.env.JWT_SECRET!, {
			...this.options,
		});
	}

	public verify(token: string) {
		if (!token) {
			return null;
		}

		return new Promise<Payload>((resolve, reject) => {
			jwt.verify(
				token,
				process.env.JWT_SECRET!,
				{ ...this.options },
				(err, payload) => {
					if (err) {
						return reject(err);
					}
					return resolve(payload as Payload);
				}
			);
		});
	}

	public signRefresh(payload: RefreshPayload) {
		return jwt.sign(payload, process.env.JWT_REFRESH_SECRET!, {
			...this.options,
			expiresIn: this.EXPIRE_REFRESH,
		});
	}

	public verifyRefreshToken(token: string) {
		try {
			return jwt.verify(token, process.env.JWT_REFRESH_SECRET!, {
				...this.options,
			}) as RefreshPayload;
		} catch (error: any) {
			return null;
		}
	}

	public isTokenExpired(token: string) {
		const decoded = jwt.decode(token) as JwtPayload;
		const exp = (decoded.exp as number) * 1000;
		const now = Date.now();
		return now > exp;
	}
}

export default new JwtService({
	expiresIn: '15m',
});
