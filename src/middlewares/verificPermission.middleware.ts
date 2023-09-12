import { NextFunction, Request, Response } from "express";
import { AppError } from "../errors";

const verificPermission = (req: Request, res: Response, next: NextFunction): void => {
  const { admin, sub } = res.locals.decoded;
  const { id } = req.params;

  if (admin) return next();

  if (req.method != "GET") {

    if (id !== sub) throw new AppError("Insufficient permission", 403);

    return next();
  } 
    
  throw new AppError("Insufficient permission", 403);
  
};

export default verificPermission;