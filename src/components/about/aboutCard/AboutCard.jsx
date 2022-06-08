import React from "react";
import "./aboutCard.scss";
import { CgArrowLongRightR } from "react-icons/cg";
const AboutComponent = ({ icon, title, description }) => {
  return (
    <div className="aboutComponent__wrapper bg-white">
      <img src={icon} alt="icon" />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="flex items-center">
        <CgArrowLongRightR color={"blue"} style={{ marginRight: "10px" }} />{" "}
        <a>APPLY NOW</a>
      </button>
    </div>
  );
};

export default AboutComponent;
