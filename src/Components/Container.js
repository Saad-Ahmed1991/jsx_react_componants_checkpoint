import React from "react";
import ProfilePhoto from "./Profile/ProfilePhoto";
import FullName from "./Profile/FullName";
import Adress from "./Profile/Adress";

export default function Container() {
  return (
    <div className="container">
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}
