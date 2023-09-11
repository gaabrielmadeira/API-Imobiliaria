import { Router } from "express";
import { validateBody } from "../middlewares";
import { SessionCreate } from "../schemas";
import { sessionController } from "../controllers";

const sessionRouter: Router = Router();

sessionRouter.post("", validateBody(SessionCreate), sessionController.createLogin);

export default sessionRouter;