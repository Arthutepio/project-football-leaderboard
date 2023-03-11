import * as jwt from 'jsonwebtoken';

const secret: string = process.env.JWT_SECRET || 'jwt_secret';

export const createToken = (email: string) => jwt.sign({ email }, secret, {
  algorithm: 'HS256',
  expiresIn: '30d',
});

export const decodeToken = (token: string) => jwt.verify(token, secret) as jwt.JwtPayload;
