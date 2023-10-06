import React from "react";
import "./Reasons.css";
import image1 from "../../assets/image1.png";
import image2 from "../../assets/image2.png";
import image3 from "../../assets/image3.png";
import image4 from "../../assets/image4.png";
import tick from "../../assets/tick.png";

function Reasons() {
  return (
    <div className="Reasons">
      <div className="left-r">
        <img src={image1} alt="" />
        <img src={image2} alt="" />
        <img src={image3} alt="" />
        <img src={image4} alt="" />
      </div>
      <div className="right-r">
        <span>Some Reasons</span>
        <div>
          <span className="stroke-text">Why </span>
          <span> Choose Us</span>
        </div>

        <div>
        <div>
          <img src={tick} alt=""></img>
          <span>because we are</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>because we are</span>
        </div>
        <div>
          <img src={tick} alt="" />
          <span>because we are</span>
        </div>
        <div>
          <img src={tick}alt="" />
          <span>because we are</span>
        </div>
        </div>
      </div>
    </div>
  );
}

export default Reasons;
