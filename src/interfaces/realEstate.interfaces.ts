import { z } from "zod";
import { RealEstateCreateSchema, RealEstateReadSchema, RealEstateSchema } from "../schemas";

type RealEstateCreate = z.infer<typeof RealEstateCreateSchema>;
type RealEstateReturn = z.infer<typeof RealEstateSchema>;
type RealEstateRead = z.infer<typeof RealEstateReadSchema>;

export {
  RealEstateCreate,
  RealEstateReturn,
  RealEstateRead
};