import { compare } from "bcryptjs";
import User from "../entities/users.entity";
import { AppError } from "../errors";
import { sessionCreate, sessionReturn } from "../interfaces";
import { userRepo } from "../repositories";
import { sign } from "jsonwebtoken";

const createLogin = async (payload: sessionCreate): Promise<sessionReturn> => {
  const { email, password } = payload;

  const foundUser: User | null = await userRepo.findOneBy({ email: email });

  if (!foundUser) throw new AppError("Invalid credentials", 401);

  const samePassword: boolean = await compare(password, foundUser.password);

  if (!samePassword) throw new AppError("Invalid credentials", 401);

  const token: string = sign(
    { email: foundUser.email, admin: foundUser.admin },
    process.env.SECRET_KEY!,
    { subject: foundUser.id.toString(), expiresIn: process.env.EXPIRES_IN! }
  );

  return { token };
};

export default { createLogin };