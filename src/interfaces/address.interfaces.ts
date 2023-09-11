import { z } from "zod";
import { AddressCreateSchema } from "../schemas";

type AddressCreate = z.infer<typeof AddressCreateSchema>;

export {
  AddressCreate
};