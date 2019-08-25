import moment, { Moment } from "moment";
import { MomentSlot, CalendarDay } from "../types";
import { MockDoctor } from "./mock-data";

export const getDaySlots = (day: Moment): MomentSlot[] => {
  let convertedSlots: MomentSlot[] = [];
  const availableDay = MockDoctor.availableDays.find(
    d => day.format("YYYY-MM-DD") === d.calendarDay
  );
  if (availableDay) {
    convertedSlots = availableDay.slots.map(slot => {
      return {
        time: moment(slot.time),
        isAvailable:slot.isAvailable
      };
    });
  }
  return convertedSlots;
};

export const getFirstAvailableStartDate = (dates: CalendarDay[]) => {
  const moments: Moment[] = [];
  dates.forEach(d => moments.push(moment(d.calendarDay, "YYYY-MM-DD")));
  return moment.min(moments);
};
