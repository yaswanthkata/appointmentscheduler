import React from "react";
import { shallow, ShallowWrapper } from "enzyme";
import TimeSlots, { ITimeSlotsProps } from "./TimeSlots";
import moment, { Moment } from "moment";
import * as MomentHelper from "../../common/moment-helper";

const props: ITimeSlotsProps = {
  slots: MomentHelper.getDaySlots(moment()),
  onSlotClick: jest.fn()
};

let componentWrapper: ShallowWrapper<React.Component>;

beforeEach(() => {
  componentWrapper = shallow(<TimeSlots {...props} />);
});

it("should render Timeslots component correctly", () => {
  expect(componentWrapper).toMatchSnapshot();
});

it("should render  a list of slots", () => {
  const slots = componentWrapper.find("button");
  expect(slots.length).toEqual(5);
});

it("should call onSlotClick on slot item click", () => {
  componentWrapper
    .find(".btn")
    .at(0)
    .simulate("click");
  expect(props.onSlotClick).toHaveBeenCalled();
});
