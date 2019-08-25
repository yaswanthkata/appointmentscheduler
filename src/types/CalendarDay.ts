import { Moment } from "moment";

export interface CalendarDay {
  calendarDay: string;
  slots: Slot[];
}

export interface Slot {
  time: string;
  isAvailable: boolean;
}

export interface MomentSlot {
  time: Moment;
  isAvailable: boolean;
}
