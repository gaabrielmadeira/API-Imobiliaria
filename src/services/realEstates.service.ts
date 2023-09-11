import Address from "../entities/addresses.entity";
import Category from "../entities/categories.entity";
import { AppError } from "../errors";
import { AddressCreate, RealEstateCreate, RealEstateRead, RealEstateReturn } from "../interfaces";
import { addressRepo, categoryRepo, realEstateRepo } from "../repositories";
import { RealEstateReadSchema } from "../schemas";

const createRealEstate = async ({
  address,
  categoryId,
  ...payload
}: RealEstateCreate): Promise<RealEstateReturn> => {
  const { street, zipCode, number, city, state } = address;

  const foundAddress: Address | null = await addressRepo.findOneBy({
    street,
    zipCode,
    number,
    city,
    state
  });

  if (foundAddress) throw new AppError("Address already exists", 409);

  const addressCreate: AddressCreate = addressRepo.create(address);
  await addressRepo.save(addressCreate);

  const foundCategory: Category | null = await categoryRepo.findOneBy({ id: categoryId });

  if (!foundCategory) throw new AppError("Category not found", 404);

  const realEstate = realEstateRepo.create({
    ...payload,
    address: addressCreate,
    category: foundCategory,
  });

  await realEstateRepo.save(realEstate);

  return realEstate;
};

const readRealEstates = async (): Promise<RealEstateRead> => {
  return RealEstateReadSchema.parse(await realEstateRepo.find({
    relations: {
      address: true,
    }
  }));
};

export default {
  createRealEstate,
  readRealEstates
};