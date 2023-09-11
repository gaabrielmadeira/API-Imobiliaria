import { z } from "zod";
import { CategorySchema } from "./category.schema";
import { AddressCreateSchema, AddressSchema } from "./address.schema";

const RealEstateSchema = z.object({
  id: z.number().positive(),
  sold: z.boolean().default(false),
  value: z.number().or(z.string()).default(0),
  size: z.number().int().positive(),
  createdAt: z.string().or(z.date()),
  updatedAt: z.string().or(z.date()),
  address: AddressSchema,
  category: CategorySchema
});

const RealEstateCreateSchema = RealEstateSchema.omit({
  id: true,
  sold: true,
  createdAt: true,
  updatedAt: true,
  category: true
}).extend({
  address: AddressCreateSchema,
  categoryId: z.number().positive(),
});

const RealEstateReadSchema = RealEstateSchema.omit({ 
  category: true 
}).extend({
  address: AddressSchema.nullable(),
}).array();

export {
  RealEstateSchema,
  RealEstateCreateSchema,
  RealEstateReadSchema
};