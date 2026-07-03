import { Router } from 'express';
import { asyncHandler } from '../../shared/http/asyncHandler.js';
import { validateRequest } from '../../shared/http/validateRequest.js';
import { getAuthenticatedUser, loginUser, registerUser } from './auth.service.js';
import { requireAuth } from './auth.middleware.js';
import { loginSchema, registerSchema } from './auth.schemas.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateRequest({ body: registerSchema }),
  asyncHandler(async (req, res) => {
    const response = await registerUser(req.body);
    res.status(201).json(response);
  })
);

authRouter.post(
  '/login',
  validateRequest({ body: loginSchema }),
  asyncHandler(async (req, res) => {
    const response = await loginUser(req.body);
    res.json(response);
  })
);

authRouter.get(
  '/me',
  requireAuth,
  asyncHandler(async (req, res) => {
    const user = await getAuthenticatedUser(req.user!.id);
    res.json({ user });
  })
);

authRouter.post('/logout', requireAuth, (_req, res) => {
  res.status(204).send();
});
