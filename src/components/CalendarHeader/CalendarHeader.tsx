import * as React from "react";
import { Moment } from "moment";
import "./CalendarHeader.scss";

export interface ICalendarHeaderProps {
  days: Moment[];
  handleClickNext: React.MouseEventHandler<any>;
  handleClickPrev: React.MouseEventHandler<any>;
}

export default function CalendarHeader({
  days,
  handleClickPrev,
  handleClickNext
}: ICalendarHeaderProps) {
  return (
    <div className="card">
      <div className="header-title bg-info">
        <h3>Schedule your session</h3>
        <h5>
          <span>Timezone: </span>Lisbon (+1)
        </h5>
      </div>
      <div className="card-body">
        <div className="react-timeslot-header">
          <div
            className="btn btn-circle"
            color="primary"
            onClick={handleClickPrev}
          >
            <i className="fa fa-chevron-left" />
          </div>

          {days.map((day, index) => {
            return (
              <div className="day" key={index}>
                <div className="day-title">{day.format("ddd")}</div>
                <div className="date">{day.format("MMM D")}</div>
              </div>
            );
          })}

          <div
            className="btn btn-circle"
            color="primary"
            onClick={handleClickNext}
          >
            <i className="fa fa-chevron-right" />
          </div>
        </div>
      </div>
    </div>
  );
}
