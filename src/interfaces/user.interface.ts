import { z } from "zod";
import { UserCreateSchema, UserReturnSchema } from "../schemas";
import { DeepPartial, Repository } from "typeorm";
import User from "../entities/users.entity";

type UserCreate = z.infer<typeof UserCreateSchema>;
type UserReturn = z.infer<typeof UserReturnSchema>;
type UserRead = Array<UserReturn>;
type UserUpdate = DeepPartial<User>;
type UserRepo = Repository<User>;

export {
  UserCreate,
  UserRead,
  UserUpdate,
  UserRepo,
  UserReturn
};