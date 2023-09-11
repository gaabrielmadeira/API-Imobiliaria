import { NextFunction, Response, Request } from "express";
import RealEstate from "../entities/realEstates.entity";
import { realEstateRepo } from "../repositories";
import { AppError } from "../errors";

const realEstateExists = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  const { realEstateId } = req.body;
  const { id } = req.params;

  if (realEstateId && !id) {
    const realEstateExists: RealEstate | null = await realEstateRepo.findOneBy({
      id: realEstateId
    })

    if (!realEstateExists) throw new AppError("RealEstate not found", 404)

    return next();
  } else if (!realEstateId && id) {
    const realEstateExists: RealEstate | null = await realEstateRepo.findOneBy({
      id: Number(id)
    })

    if (!realEstateExists) throw new AppError("RealEstate not found", 404)

    return next()
  }
};

export default realEstateExists;
