import { CategoryReturn } from "../interfaces";
import { CategoryRead, CategoryRealEstateReturn } from "../interfaces/category.interfaces";
import { categoriesService } from "../services";
import { Request, Response } from "express";

const createCategory = async (req: Request, res: Response): Promise<Response> => {
  const category: CategoryReturn = await categoriesService.createCategory(req.body);

  return res.status(201).json(category);
};

const readCategory = async (req: Request, res: Response): Promise<Response> => {
  const category: CategoryRead = await categoriesService.readCategory();

  return res.status(200).json(category);
};

const retrieve = async (req: Request, res: Response): Promise<Response> => {
  const id: number  = Number(req.params.id);
  const realEstates: CategoryRealEstateReturn = await categoriesService.retrieve(id);
  
  return res.status(200).json(realEstates);
};

export default {
  createCategory,
  readCategory,
  retrieve
};