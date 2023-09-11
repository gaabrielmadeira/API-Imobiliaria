import { UserSchema } from "./user.schema";

const SessionCreate = UserSchema.pick({
  email: true,
  password: true,
});

export default SessionCreate;