import { z } from "zod";
import { ScheduleCreateSchema } from "../schemas";

type SchedulesCreate = z.infer<typeof ScheduleCreateSchema>;

export {
  SchedulesCreate
};