import { RealEstateRead } from "../interfaces";
import realEstatesService from "../services/realEstates.service";
import { Request, Response } from "express";

const createRealEstate = async (req: Request, res: Response): Promise<Response> => {
  const realEstate = await realEstatesService.createRealEstate(req.body);

  return res.status(201).json(realEstate);
};

const readRealEstates = async (req: Request, res: Response): Promise<Response> => {
  const realEstates: RealEstateRead = await realEstatesService.readRealEstates()

  return res.status(200).json(realEstates);
};

export default{
  createRealEstate,
  readRealEstates
};