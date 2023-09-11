import { Request, Response } from "express";
import { usersService } from "../services";
import { UserRead, UserReturn, UserUpdate } from "../interfaces";

const createUser = async (req: Request, res: Response): Promise<Response> => {
  const user: UserReturn = await usersService.createUser(req.body);

  return res.status(201).json(user);
};

const readUsers = async (req: Request, res: Response): Promise<Response> => {
  const users: UserRead = await usersService.readUsers()

  return res.status(200).json(users);
};

const updateUser = async(req: Request, res: Response): Promise<Response> => {
  const { foundEntity } = res.locals;
  const { body } = req;

  const user: UserUpdate = await usersService.updateUser(foundEntity, body);
  
  return res.status(200).json(user);
};

const destroyUser = async (req: Request, res: Response): Promise<Response> => {
  await usersService.destroyUser(res.locals.foundEntity);

  return res.status(204).json();
};

export default {
  createUser,
  readUsers,
  updateUser,
  destroyUser
};