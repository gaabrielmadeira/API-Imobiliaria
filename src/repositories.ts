import { AppDataSource } from "./data-source";
import Address from "./entities/addresses.entity";
import Category from "./entities/categories.entity";
import RealEstate from "./entities/realEstates.entity";
import Schedule from "./entities/schedules.entity";
import User from "./entities/users.entity";

const userRepo = AppDataSource.getRepository(User);
const categoryRepo = AppDataSource.getRepository(Category);
const realEstateRepo = AppDataSource.getRepository(RealEstate);
const addressRepo = AppDataSource.getRepository(Address);
const scheduleRepo = AppDataSource.getRepository(Schedule);

export {
  userRepo,
  categoryRepo,
  realEstateRepo,
  addressRepo,
  scheduleRepo
};