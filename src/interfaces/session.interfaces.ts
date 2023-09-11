import { z } from "zod";
import { SessionCreate } from "../schemas";

type sessionReturn = {
  token: string;
};

type sessionCreate = z.infer<typeof SessionCreate>;

export {
  sessionReturn,
  sessionCreate
};