import { NextFunction, Request, Response } from "express";
import { userRepo } from "../repositories";
import { AppError } from "../errors";
import User from "../entities/users.entity";

const uniqueEmail  = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const email: string = req.body.email;

  if(!email) return next();
  
  const foundEmail: User | null = await userRepo.findOneBy({ email });

  if(!foundEmail) return next(); 

  throw new AppError ("Email already exists", 409);
};

export default uniqueEmail;