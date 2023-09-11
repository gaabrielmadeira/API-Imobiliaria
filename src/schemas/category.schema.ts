import { z } from "zod";
import { RealEstateSchema } from "./realEstate.schema";

const CategorySchema = z.object({
  id: z.number().positive(),
  name: z.string().max(45),
});

const CategoryCreateSchema = CategorySchema.omit({ id: true });
const CategoryReadSchema = CategorySchema.array();
const CategoryRealEstateReturnSchema = CategorySchema.extend({
  realEstate: RealEstateSchema.omit({
    address: true,
    category: true
  }).array()
});

export {
  CategorySchema,
  CategoryCreateSchema,
  CategoryReadSchema,
  CategoryRealEstateReturnSchema
};
