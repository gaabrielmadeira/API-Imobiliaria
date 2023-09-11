import { z } from "zod";

const ScheduleSchema = z.object({
  id: z.number().positive(),
  date: z.string(),
  hour: z.string()
});

const ScheduleCreateSchema = ScheduleSchema.omit({
  id: true
}).extend({
  realEstateId: z.number().int().positive(),
});

export {
  ScheduleSchema,
  ScheduleCreateSchema
};