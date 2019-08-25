import { Profile } from "./Profile";
import { CalendarDay } from "./CalendarDay";

export interface Doctor {
  profile: Profile;
  availableDays: CalendarDay[];
}
