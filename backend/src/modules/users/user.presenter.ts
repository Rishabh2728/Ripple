import type { Types } from 'mongoose';
import type { UserDocument } from './user.model.js';

export type PublicUser = {
  id: string;
  username: string;
  email: string;
  avatarUrl: string | null;
  bio: string;
  createdAt: Date;
  updatedAt: Date;
};

type PresentableUser = UserDocument & {
  _id: Types.ObjectId;
  createdAt: Date;
  updatedAt: Date;
};

export function presentUser(user: PresentableUser): PublicUser {
  return {
    id: user._id.toString(),
    username: user.username,
    email: user.email,
    avatarUrl: user.avatarUrl ?? null,
    bio: user.bio,
    createdAt: user.createdAt,
    updatedAt: user.updatedAt
  };
}
