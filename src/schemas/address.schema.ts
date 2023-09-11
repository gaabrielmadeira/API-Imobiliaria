import { z } from "zod";

const AddressSchema = z.object({
  id: z.number().positive(),
  street: z.string().max(45),
  zipCode: z.string().max(8),
  number: z.number(),
  city: z.string().max(20),
  state: z.string().max(2)
});

const AddressCreateSchema = AddressSchema.omit({ id: true});

export {
  AddressSchema,
  AddressCreateSchema
};