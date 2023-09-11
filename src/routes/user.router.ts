import { Router } from "express";
import { usersController } from "../controllers";
import { uniqueEmail, idExists, validateBody, verificPermission } from "../middlewares";
import { UserCreateSchema, UserUpdateSchema } from "../schemas";
import validateToken from "../middlewares/validateToken.middleware";

const UserRouter: Router = Router();

UserRouter.post("",
  validateBody(UserCreateSchema),
  uniqueEmail,
  usersController.createUser
);

UserRouter.get("",
  validateToken,
  verificPermission,
  usersController.readUsers
);

UserRouter.use("/:id", idExists);

UserRouter.patch("/:id",
  validateToken,
  verificPermission,
  validateBody(UserUpdateSchema),
  usersController.updateUser
);

UserRouter.delete("/:id",
  validateToken,
  verificPermission,
  usersController.destroyUser
);

export default UserRouter;