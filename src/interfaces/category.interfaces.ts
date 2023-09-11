import { z } from "zod";
import { CategoryCreateSchema, CategoryRealEstateReturnSchema, CategorySchema } from "../schemas";

type CategoryCreate = z.infer<typeof CategoryCreateSchema>;
type CategoryReturn = z.infer<typeof CategorySchema>;
type CategoryRead = Array<CategoryReturn>;
type CategoryRealEstateReturn = z.infer<typeof CategoryRealEstateReturnSchema>

export {
  CategoryCreate,
  CategoryReturn,
  CategoryRead,
  CategoryRealEstateReturn
};