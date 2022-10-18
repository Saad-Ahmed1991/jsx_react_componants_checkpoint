import React from "react";
import Profilepic from "./profilepic.jpg";

export default function ProfilePhoto() {
  return (
    <div className="profile">
      <img className="profile-img" src={Profilepic} alt="myImage" />
    </div>
  );
}
