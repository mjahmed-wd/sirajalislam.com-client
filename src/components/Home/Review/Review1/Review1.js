import React from "react";
import bgImage from "../../../../images/webp/image4.webp";
import { Icon } from "rsuite";
import CircleCircle from "../../../SharableComponents/CenterCenter/CenterCenter";
const Review1 = ({ reviewTextEn, reviewerEn }) => {
  return (
    <>
    <CircleCircle bgImg={bgImage} overlay="black">
    <div className=" text-center" style={{ height: "100%" }}>
        <div className="container text-center pt-5 pb-5">
          <p style={{ color: "white", fontSize: "20px" }}>
            <Icon
              icon="quote-left"
              size="lg"
              style={{ color: "white", marginRight: "10px" }}
            />
            {reviewTextEn}
            <Icon
              icon="quote-right"
              size="lg"
              style={{ color: "white", marginLeft: "10px" }}
            />
          </p>
          <div className="reviewerNameContainer d-flex justify-content-center mt-5">
            <div
              className="reviewerName"
              style={{ width: window.innerWidth < 960 ? "100%" : "50%" }}
            >
              <p>{reviewerEn}</p>
            </div>
          </div>
        </div>
      </div>
    </CircleCircle>
    {/* <div
      className="full-bg"
      style={{
        height: "100vh",
        backgroundImage: `url(${bgImage})`,
        backgroundPosition: window.innerWidth < 600 ? "bottom" : "left",
      }}
    >
      <div className="overlay-black" style={{ height: "100%" }}>
        <div className="container text-center pt-5 pb-5" style={{margin:"auto 0"}}>
          <p style={{ color: "white", fontSize: "20px" }}>
            <Icon
              icon="quote-left"
              size="lg"
              style={{ color: "white", marginRight: "10px" }}
            />
            {reviewTextEn}
            <Icon
              icon="quote-right"
              size="lg"
              style={{ color: "white", marginLeft: "10px" }}
            />
          </p>
          <div className="reviewerNameContainer d-flex justify-content-center mt-5">
            <div
              className="reviewerName"
              style={{ width: window.innerWidth < 600 ? "100%" : "50%" }}
            >
              <p>{reviewerEn}</p>
            </div>
          </div>
        </div>
      </div>
    </div> */}
    </>
  );
};

export default Review1;
