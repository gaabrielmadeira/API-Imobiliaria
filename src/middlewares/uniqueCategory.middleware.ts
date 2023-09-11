import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";
import { categoryRepo } from "../repositories";

const uniqueCategory = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { name } = req.body;

  const foundCategory = await categoryRepo.findOneBy({ name });

  if(foundCategory) throw new AppError("Category already exists", 409);

  return next();
};

export default uniqueCategory;