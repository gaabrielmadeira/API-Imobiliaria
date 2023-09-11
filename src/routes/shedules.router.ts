import { Router } from "express";
import { realEstateExists, validateBody, verificPermission } from "../middlewares";
import { ScheduleCreateSchema } from "../schemas";
import validateToken from "../middlewares/validateToken.middleware";
import schedulesController from "../controllers/schedules.controller";

const SchedulesRouter: Router = Router();

SchedulesRouter.post("", 
validateToken,
validateBody(ScheduleCreateSchema),
realEstateExists,
schedulesController.createSchedule
);

SchedulesRouter.get("/realEstate/:id", 
validateToken, 
verificPermission,
realEstateExists,
);

export default SchedulesRouter;