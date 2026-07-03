import jwt, { type JwtPayload, type SignOptions } from 'jsonwebtoken';
import { env } from '../../config/env.js';
import { AppError } from '../http/AppError.js';

export type AccessTokenPayload = {
  userId: string;
};

function getJwtSecret(): string {
  if (!env.JWT_SECRET) {
    throw new AppError('JWT_SECRET is not configured', 500);
  }

  return env.JWT_SECRET;
}

export function signAccessToken(payload: AccessTokenPayload): string {
  return jwt.sign(payload, getJwtSecret(), {
    expiresIn: env.JWT_EXPIRES_IN as SignOptions['expiresIn']
  });
}

export function verifyAccessToken(token: string): AccessTokenPayload {
  try {
    const decoded = jwt.verify(token, getJwtSecret()) as JwtPayload;

    if (typeof decoded.userId !== 'string') {
      throw new AppError('Invalid token payload', 401);
    }

    return { userId: decoded.userId };
  } catch (error) {
    if (error instanceof AppError) {
      throw error;
    }

    throw new AppError('Invalid or expired token', 401);
  }
}
