import { Document, Schema, model } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  photo?: string;
  bio?: string;
  phone?: string;
  isAdmin: boolean;
  isPublic: boolean;
  googleId?: string;
}

const userSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: {
      type: String,
      required: function () {
        // Only require password if the user is not registering through Google authentication
        return !this.googleId;
      },
    },
    photo: { type: String },
    bio: { type: String },
    phone: { type: String },
    isAdmin: { type: Boolean, default: false },
    isPublic: { type: Boolean, default: true },
    googleId: { type: String },
  },

  { timestamps: true }
);

export const User = model<IUser>("User", userSchema);
