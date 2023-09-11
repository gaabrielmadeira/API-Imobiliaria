import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import User from "./users.entity";
import RealEstate from "./realEstates.entity";

@Entity("schedules")
class Schedule {

  @PrimaryGeneratedColumn("increment")
  id: number;

  @Column({ type: "date" })
  date: string;

  @Column({ type: "time" })
  hour: string;

  @ManyToOne(() => RealEstate, (schedule) => schedule.schedule)
  realEstate: RealEstate;
  
  @ManyToOne(() => User, (schedule) => schedule.schedule)
  user: User;
};

export default Schedule;
