import { isWeekend, parse } from "date-fns";
import RealEstate from "../entities/realEstates.entity";
import Schedule from "../entities/schedules.entity";
import { AppError } from "../errors";
import { SchedulesCreate } from "../interfaces";
import { realEstateRepo, scheduleRepo } from "../repositories";

const createSchedule = async (payload: SchedulesCreate, userId: number): Promise<void> => {
  const { date, hour, realEstateId } = payload;

  const convertDate = parse(date, 'yyyy/MM/dd', new Date());
  if (isWeekend(convertDate)) {
    throw new AppError("Invalid date, work days are monday to friday", 400);
  }

  const [hourPart, minutePart]: Array<string> = hour.split(":");
  const convertHour: number = Number(hourPart);
  const convertMinute: number = Number(minutePart);

  if (convertHour < 8 || (convertHour === 18 && convertMinute > 0) || convertHour > 18) {
    throw new AppError("Invalid hour, available times are 8AM to 18PM", 400)
  }

  const userScheduleExists: Schedule | null = await scheduleRepo.findOneBy({
    date,
    hour,
    user: { id: userId }
  })

  if (userScheduleExists) throw new AppError(
    "User schedule to this real estate at this date and time already exists",
    409
  )

  const realEstateExists: RealEstate | null = await realEstateRepo.findOneBy({
    id: realEstateId
  })

  if (!realEstateExists) throw new AppError("RealEstate not found", 404);

  const scheduleExists: Schedule | null = await scheduleRepo.findOneBy({
    date,
    hour
  });

  if (scheduleExists) throw new AppError(
    "Schedule to this real estate at this date and time already exists",
    409
  )

  const scheduleObj = {
    ...payload,
    userId: userId
  };

  const scheduleCreate = scheduleRepo.create(scheduleObj);
  await scheduleRepo.save(scheduleCreate);
};

export default {
  createSchedule
};
