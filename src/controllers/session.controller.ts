import { NextFunction, Request, Response } from "express";
import { sessionReturn } from "../interfaces";
import { sessionService } from "../services";

const createLogin = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const token: sessionReturn = await sessionService.createLogin(req.body);

  return res.status(200).json(token);
};

export default { createLogin };