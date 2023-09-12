import { Request, Response } from "express";
import { schedulesService } from "../services";
import RealEstate from "../entities/realEstates.entity";

const createSchedule = async (req: Request, res: Response): Promise<Response> => {
  const userId = res.locals.decoded.sub;
  await schedulesService.createSchedule(req.body, Number(userId))

  return res.status(201).json({ message: "Schedule created" })
};

const retrieveScheduleRealEstates = async (req: Request, res: Response): Promise<Response> => {
  const { id } = req.params;
  const schedulesRealEstate: RealEstate = await schedulesService.retrieveScheduleRealEstates(Number(id))

  return res.status(200).json(schedulesRealEstate)
};

export default {
  createSchedule,
  retrieveScheduleRealEstates
};