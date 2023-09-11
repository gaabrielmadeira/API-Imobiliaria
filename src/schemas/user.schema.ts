import { z } from "zod";

const UserSchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
  email: z.string().max(45).email(),
  admin: z.boolean().default(false),
  password: z.string().max(120),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  deletedAt: z.string().or(z.date()).nullable(),
});

const UserCreateSchema = UserSchema.omit({
  id: true,
  createdAt: true,
  updatedAt: true,
  deletedAt: true,
});

const UserReturnSchema = UserSchema.omit({ password: true });
const UserReadSchema = UserReturnSchema.array();

const UserUpdateSchema = UserCreateSchema.omit({ admin: true }).partial();

export {
  UserSchema,
  UserCreateSchema,
  UserReturnSchema,
  UserReadSchema,
  UserUpdateSchema
};

