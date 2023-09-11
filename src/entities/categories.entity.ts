import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import RealEstate from "./realEstates.entity";

@Entity("categories")
class Category {
  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ unique: true, length: 45 })
  name: string;

  @OneToMany(() => RealEstate, (realEstates) => realEstates.category)
  realEstate: RealEstate[];
};

export default Category;