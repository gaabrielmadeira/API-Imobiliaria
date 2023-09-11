import { NextFunction, Request, Response } from "express";
import User from "../entities/users.entity";
import { userRepo } from "../repositories";
import { AppError } from "../errors";

const idExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const paramId: number = Number(req.params.id);

  const foundEntity: User | null = await userRepo.findOneBy({ id: paramId})
  
  if(!foundEntity) throw new AppError ("User not found", 404);

  res.locals = {...res.locals, foundEntity};
  
  return next();
};

export default idExists;