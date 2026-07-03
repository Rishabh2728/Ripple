import bcrypt from 'bcrypt';
import { AppError } from '../../shared/http/AppError.js';
import { signAccessToken } from '../../shared/security/jwt.js';
import { UserModel, type UserDocument } from '../users/user.model.js';
import { presentUser, type PublicUser } from '../users/user.presenter.js';
import type { LoginInput, RegisterInput } from './auth.schemas.js';

const PASSWORD_SALT_ROUNDS = 12;

export type AuthResponse = {
  token: string;
  user: PublicUser;
};

function createAuthResponse(user: UserDocument): AuthResponse {
  return {
    token: signAccessToken({ userId: user._id.toString() }),
    user: presentUser(user)
  };
}

function isDuplicateKeyError(error: unknown): boolean {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    (error as { code?: number }).code === 11000
  );
}

export async function registerUser(input: RegisterInput): Promise<AuthResponse> {
  const passwordHash = await bcrypt.hash(input.password, PASSWORD_SALT_ROUNDS);

  try {
    const user = await UserModel.create({
      username: input.username,
      email: input.email,
      passwordHash
    });

    return createAuthResponse(user as UserDocument);
  } catch (error) {
    if (isDuplicateKeyError(error)) {
      throw new AppError('Username or email is already in use', 409);
    }

    throw error;
  }
}

export async function loginUser(input: LoginInput): Promise<AuthResponse> {
  const user = await UserModel.findOne({ email: input.email }).select('+passwordHash');

  if (!user) {
    throw new AppError('Invalid email or password', 401);
  }

  const passwordMatches = await (user as UserDocument).comparePassword(input.password);

  if (!passwordMatches) {
    throw new AppError('Invalid email or password', 401);
  }

  return createAuthResponse(user as UserDocument);
}

export async function getAuthenticatedUser(userId: string): Promise<PublicUser> {
  const user = await UserModel.findById(userId);

  if (!user) {
    throw new AppError('Authenticated user was not found', 401);
  }

  return presentUser(user as UserDocument);
}
