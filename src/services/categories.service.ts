import Category from "../entities/categories.entity";
import { AppError } from "../errors";
import { CategoryCreate, CategoryReturn } from "../interfaces";
import { CategoryRead, CategoryRealEstateReturn } from "../interfaces/category.interfaces";
import { categoryRepo } from "../repositories";
import { CategorySchema } from "../schemas";
import { CategoryReadSchema } from "../schemas/category.schema";

const createCategory = async (payload: CategoryCreate): Promise<CategoryReturn> => {
  const category: Category = categoryRepo.create(payload);
  await categoryRepo.save(category);

  return CategorySchema.parse(category)
};

const readCategory = async (): Promise<CategoryRead> => {
  return CategoryReadSchema.parse(await categoryRepo.find())
};

const retrieveCategory = async (categoryId: number): Promise<CategoryRealEstateReturn> => {
  const foundCategory: Category | null = await categoryRepo.findOne({
    where: {
      id: categoryId
    },
    relations: {
      realEstate: true
    }
  });

  if (!foundCategory) throw new AppError("Category not found", 404);

  return foundCategory;
};

export default {
  createCategory,
  readCategory,
  retrieveCategory
};