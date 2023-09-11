import "reflect-metadata";
import "express-async-errors";
import express from "express";
import { CategoriesRouter, RealEstateRouter, SchedulesRouter, UserRouter, sessionRouter } from "./routes";
import { handleErrors } from "./middlewares";

const app = express();
app.use(express.json());

app.use("/users", UserRouter);
app.use("/login", sessionRouter);
app.use("/categories", CategoriesRouter);
app.use("/realEstate", RealEstateRouter);
app.use("/schedules", SchedulesRouter);

app.use(handleErrors);

export default app;
