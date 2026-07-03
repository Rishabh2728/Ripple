import bcrypt from 'bcrypt';
import { model, Schema, type HydratedDocument, type InferSchemaType } from 'mongoose';

const USERNAME_PATTERN = /^[a-zA-Z0-9_]{3,24}$/;

const userSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      trim: true,
      minlength: 3,
      maxlength: 24,
      match: USERNAME_PATTERN,
      unique: true,
      index: true
    },
    email: {
      type: String,
      required: true,
      trim: true,
      lowercase: true,
      unique: true,
      index: true
    },
    passwordHash: {
      type: String,
      required: true,
      select: false
    },
    avatarUrl: {
      type: String,
      default: null
    },
    bio: {
      type: String,
      maxlength: 180,
      default: ''
    }
  },
  {
    timestamps: true,
    versionKey: false
  }
);

userSchema.methods.comparePassword = function comparePassword(password: string): Promise<boolean> {
  return bcrypt.compare(password, this.passwordHash);
};

export type User = InferSchemaType<typeof userSchema>;

export type UserDocument = HydratedDocument<User> & {
  comparePassword(password: string): Promise<boolean>;
};

export const UserModel = model<User>('User', userSchema);
