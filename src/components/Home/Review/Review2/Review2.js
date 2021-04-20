import React from "react";
import bgImage from "../../../../images/webp/image5.webp";
import { Icon } from "rsuite";
import ImageContainerForReview2 from "./ImageContainerForReview2";
const Review2 = () => {
  return (
    <div
      className="full-bg"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: window.innerWidth < 600 ? "bottom" : "left",
      }}
    >
      <div className="overlay-black pt-5 pb-5">
        <div className="container text-center pt-5 pb-5">
          <p style={{ color: "white", fontSize: "20px", margin:"50px" }}>
            <Icon
              icon="quote-left"
              size="lg"
              style={{ color: "white", marginRight: "10px" }}
            />
            Siraj Al Islam, recognised as one of the best lawyer in Saudi Arabia
            <Icon
              icon="quote-right"
              size="lg"
              style={{ color: "white", marginLeft: "10px" }}
            />
          </p>
          
          <p style={{ color: "white", fontSize: "20px" }}>
            <Icon
              icon="quote-left"
              size="lg"
              style={{ color: "white", marginRight: "10px" }}
            />
            Siraj Al Islam manages One 2 One Legal, the firm awarded Best
            Boutique Law Firm in Saudi Arabia
            <Icon
              icon="quote-right"
              size="lg"
              style={{ color: "white", marginLeft: "10px" }}
            />
          </p>
        </div>
      </div>
      <ImageContainerForReview2/>
    </div>
  );
};

export default Review2;
