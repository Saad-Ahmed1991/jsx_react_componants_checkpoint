import React from "react";

export default function FullName(Name, Lastname) {
  Name = "Ahmed";
  Lastname = "Saad";
  return <div className="Fullname">{`${Name} ${Lastname}`}</div>;
}
