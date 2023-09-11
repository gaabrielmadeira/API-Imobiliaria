import { Router } from "express";
import { realEstateController } from "../controllers";
import { validateBody, verificPermission } from "../middlewares";
import { RealEstateCreateSchema } from "../schemas";
import validateToken from "../middlewares/validateToken.middleware";

const RealEstateRouter: Router = Router();

RealEstateRouter.post("",
  validateToken,
  verificPermission,
  validateBody(RealEstateCreateSchema),
  realEstateController.createRealEstate
);

RealEstateRouter.get("", realEstateController.readRealEstates);

export default RealEstateRouter;