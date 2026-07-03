import type { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { env } from '../../config/env.js';
import { AppError } from './AppError.js';

export const errorHandler: ErrorRequestHandler = (error, _req, res, _next) => {
  void _next;

  if (error instanceof ZodError) {
    res.status(400).json({
      message: 'Validation failed',
      issues: error.flatten()
    });
    return;
  }

  if (error instanceof AppError) {
    res.status(error.statusCode).json({ message: error.message });
    return;
  }

  console.error(error);

  res.status(500).json({
    message: 'Internal server error',
    ...(env.NODE_ENV === 'development' ? { detail: error instanceof Error ? error.message : error } : {})
  });
};
