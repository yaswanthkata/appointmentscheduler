import * as React from "react";
import { Rating } from "../../shared";
import { Profile } from "../../types";
import "./DoctorProfile.scss";

export interface IDoctorProfileProps {
  profile: Profile;
}

export default function DoctorProfile({ profile }: IDoctorProfileProps) {
  return (
    <>
      <div className="profile">
        <div className="profile-image">
          <img src={profile.thumbnail} alt="" />
        </div>
        <div className="user-details">
          <div className="profile-user-name">{profile.name}</div>
          <div>
            <span className="profile-specialization">
              {profile.specialization}
            </span>{" "}
            | <span>{profile.location}</span>
          </div>
          <div>
            <span>
              <Rating rating={profile.rating} total={5} />
              (20 Reviews)
            </span>
          </div>
          <div>
            <span className="rate">{profile.rate}</span> / 50 Minutes
          </div>
        </div>
      </div>
      <p className="profile-bio">{profile.description}</p>
    </>
  );
}
