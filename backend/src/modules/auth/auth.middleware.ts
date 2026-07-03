import type { RequestHandler } from 'express';
import { AppError } from '../../shared/http/AppError.js';
import { verifyAccessToken } from '../../shared/security/jwt.js';

export const requireAuth: RequestHandler = (req, _res, next) => {
  const authorization = req.header('Authorization');

  if (!authorization?.startsWith('Bearer ')) {
    next(new AppError('Authentication token is required', 401));
    return;
  }

  const token = authorization.slice('Bearer '.length).trim();

  if (!token) {
    next(new AppError('Authentication token is required', 401));
    return;
  }

  const payload = verifyAccessToken(token);
  req.user = { id: payload.userId };
  next();
};
