import { Request, Response } from "express";
import { schedulesService } from "../services";

const createSchedule = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.decoded.sub;
  await schedulesService.createSchedule(req.body, Number(userId))

  return res.status(201).json({ message: "Schedule created" })
};

export default {
  createSchedule
};