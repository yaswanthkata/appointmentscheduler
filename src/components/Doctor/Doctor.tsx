import * as React from "react";
import "./Doctor.scss";
import { DoctorProfile } from "../DoctorProfile";
import { MockDoctor } from "../../common/mock-data";
export interface IDoctorProps {}

export default class Doctor extends React.Component<IDoctorProps> {
  public render() {
    const doctor = MockDoctor;
    return (
      <div>
        <div className="user-container">
          <div className="user-profile column">
            <DoctorProfile profile={doctor.profile} />
          </div>
          <div className="user-calendar column">
          </div>
        </div>
      </div>
    );
  }
}
