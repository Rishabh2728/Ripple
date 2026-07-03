import mongoose from 'mongoose';
import { env } from './env.js';

export async function connectDatabase(): Promise<void> {
  if (!env.MONGODB_URI) {
    if (env.NODE_ENV === 'production') {
      throw new Error('MONGODB_URI is required in production');
    }

    console.warn('MONGODB_URI is not set. API started without a database connection.');
    return;
  }

  await mongoose.connect(env.MONGODB_URI);
  console.info('MongoDB connected');
}
