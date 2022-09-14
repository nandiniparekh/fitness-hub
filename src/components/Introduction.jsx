import React from "react";
import IntroPicture from "../images/home-pic.png";

export default function Introduction() {
  return (
    <>
      <hr />
      <div className="introduction">
        <h1>CHANGING BODIES, CHANGING LIVES</h1>
        <hr />
        <img src={IntroPicture} className="animation" />
      </div>
    </>
  );
}
