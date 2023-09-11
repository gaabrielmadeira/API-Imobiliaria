import User from "../entities/users.entity";
import { UserCreate, UserRead, UserReturn, UserUpdate } from "../interfaces";
import { userRepo } from "../repositories";
import { UserReadSchema, UserReturnSchema } from "../schemas";

const createUser = async (payload: UserCreate): Promise<UserReturn> => {
  const user: User = userRepo.create(payload);
  await userRepo.save(user);

  return UserReturnSchema.parse(user);
};

const readUsers = async (): Promise<UserRead> => {
  return UserReadSchema.parse(await userRepo.find())
};

const updateUser = async (user: User, payload: UserUpdate): Promise<UserReturn> => {
   const userUpdate: User = await userRepo.save({ ...user, ...payload });

   return UserReturnSchema.parse(userUpdate)
};

const destroyUser = async (payload: User): Promise<void> => {
  await userRepo.softRemove(payload);
};

export default {
  createUser,
  readUsers,
  updateUser,
  destroyUser
};
