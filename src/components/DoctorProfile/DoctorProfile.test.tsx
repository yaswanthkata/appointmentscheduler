import React from 'react';
import { shallow, ShallowWrapper } from 'enzyme';
import DoctorProfile, { IDoctorProfileProps } from './DoctorProfile';
import { Rating } from '../../shared';
import { MockDoctor } from '../../common/mock-data';

const props: IDoctorProfileProps = {
   profile:MockDoctor.profile
}

let componentWrapper: ShallowWrapper<React.Component>;

beforeEach(() => {
    componentWrapper = shallow(<DoctorProfile {...props} />);
});

it('should render profile component correctly', () => {
    expect(componentWrapper).toMatchSnapshot();
});

it('should render a profile thumbnail', () => {
    expect(componentWrapper.find('img')).toHaveLength(1);
});

it("should render  a rating component", () => {
    const ratingComponent = componentWrapper.find(Rating).length;

    expect(ratingComponent).toEqual(1);
});

it("should render profile-description", () => {
    expect(componentWrapper.find('.profile-bio')).toHaveLength(1);
});