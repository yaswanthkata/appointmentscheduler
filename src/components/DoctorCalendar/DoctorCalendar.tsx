import * as React from "react";
import { CalendarDay, MomentSlot } from "../../types";
import { Moment } from "moment";
import "./DoctorCalendar.scss";
import { TimeSlots } from "../TimeSlots";
import { CalendarHeader } from "../CalendarHeader";
import * as MomentHelper from "../../common/moment-helper";

export interface IDoctorCalendarProps {
  availableDays: CalendarDay[];
  // no of days to be visible in calendar
  viewDays: number;
}
export interface IDoctorCalendarState {
  start: Moment;
  end: Moment;
  selectedSlot: MomentSlot | null;
}

export default class DoctorCalendar extends React.Component<
  IDoctorCalendarProps,
  IDoctorCalendarState
> {
  constructor(props: IDoctorCalendarProps) {
    super(props);
    const firstAvailableDate = MomentHelper.getFirstAvailableStartDate(
      this.props.availableDays
    );
    const start = firstAvailableDate.clone();
    const end = start.clone().add(this.props.viewDays, "days");
    this.state = {
      start: start,
      end: end,
      selectedSlot: null
    };
  }

  handleClickSlot = (selectedSlot: MomentSlot) => () => {
    this.setState({
      selectedSlot
    });
    console.log(selectedSlot);
  };

  handleClickPrev = () => {
    const { start, end } = this.state;

    this.setState({
      start: start.clone().subtract(this.props.viewDays, "day"),
      end: end.clone().subtract(this.props.viewDays, "day"),
      selectedSlot: null
    });
  };

  handleClickNext = () => {
    const { start, end } = this.state;

    this.setState({
      start: start.clone().add(this.props.viewDays, "day"),
      end: end.clone().add(this.props.viewDays, "day"),
      selectedSlot: null
    });
  };

  render() {
    const { start, end, selectedSlot } = this.state;

    const days = [];
    let day = start.clone();

    while (day < end) {
      days.push(day);
      day = day.clone().add(1, "d");
    }

    return (
      <>
        <CalendarHeader
          days={days}
          handleClickNext={this.handleClickNext}
          handleClickPrev={this.handleClickPrev}
        />
        <div className="card calendar-timeslot">
          <div className="card-body">
            <div className="calendar-days">
              {days.map((day, index) => {
                return (
                  <div key={index} className="calendar-day">
                    <div className="day-slots">
                      <TimeSlots
                        slots={MomentHelper.getDaySlots(day)}
                        onSlotClick={this.handleClickSlot}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {selectedSlot && (
          <div className="confirmation">
            Your booking :{" "}
            {selectedSlot.time.format("dddd, MMMM Do YYYY, h:mm:ss a")}
          </div>
        )}
      </>
    );
  }
}
