import React from "react";
import "./App.css";

export default function Card({ info: { image, fullName, bio, profession } }) {
  return (
    <div className="Carte">
      <img src={image} alt="myphoto" width="300" height="300" />
      <h2>{fullName} </h2>
      <h2>{bio}</h2>
      <h2>{profession}</h2>
    </div>
  );
}
