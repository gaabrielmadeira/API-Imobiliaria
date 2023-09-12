import { Router } from "express";
import validateToken from "../middlewares/validateToken.middleware";
import { uniqueCategory, validateBody, verificPermission } from "../middlewares";
import { CategoryCreateSchema } from "../schemas";
import { categoriesController } from "../controllers";

const CategoriesRouter: Router = Router();

CategoriesRouter.post("", 
validateBody(CategoryCreateSchema), 
validateToken, 
verificPermission,
uniqueCategory,
categoriesController.createCategory
);

CategoriesRouter.get("", categoriesController.readCategory);

CategoriesRouter.get("/:id/realEstate", categoriesController.retrieveCategory);

export default CategoriesRouter;