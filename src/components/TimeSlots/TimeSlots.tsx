import * as React from "react";
import { MomentSlot } from "../../types";
import "./TimeSlots.scss";

export interface ITimeSlotsProps {
  slots: MomentSlot[];
  onSlotClick(selectedSlot: MomentSlot): React.MouseEventHandler<any>;
}

export default function TimeSlots({ slots, onSlotClick }: ITimeSlotsProps) {
  return (
    <div className="time-slots">
      {slots.map(slot => (
        <div key={slot.time.toString()} className="time-slot">
          {slot.isAvailable ? (
            <button className="btn" onClick={onSlotClick(slot)}>
              {slot.time.format("HH:mm")}
            </button>
          ) : (
            <div className="no-slot">-</div>
          )}
        </div>
      ))}
    </div>
  );
}
