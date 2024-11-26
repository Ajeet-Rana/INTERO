import React from "react";
import "./ChallengingDesign.css";

const ChallengingDesign = () => {
  return (
    <div className="challenging-design">
      <div className="text-section">
        <h1>We Tackle The Most Challenging Designs</h1>
        <p>
          The world needs innovators and problem solvers who turn challenges
          into greater opportunities. We have an insatiable curiosity about
          transformative trends challenging the status.
        </p>
        <div className="contact-info">
          <div className="icon">
            <span>📞</span>{" "}
            {/* You can replace this with a proper icon or image */}
          </div>
          <div>
            <p className="phone-number">012345678</p>
            <p>Call Us Anytime</p>
          </div>
        </div>
        <button className="btn">Get Free Estimate</button>
      </div>
      <div className="image-section">
        <img src="chall.webp" alt="Interior Design" />
      </div>
    </div>
  );
};

export default ChallengingDesign;
