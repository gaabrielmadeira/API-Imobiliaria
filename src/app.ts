import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { CategoriesRouter, RealEstateRouter, SchedulesRouter, UserRouter, sessionRouter } from "./routes";
import { handleErrors } from "./middlewares";
import swaggerUI from "swagger-ui-express";
import swaggerDocument from "../swagger.json";

const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.use("/login", sessionRouter);
app.use("/categories", CategoriesRouter);
app.use("/realEstate", RealEstateRouter);
app.use("/schedules", SchedulesRouter);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerDocument))

app.use(handleErrors);

export default app;
