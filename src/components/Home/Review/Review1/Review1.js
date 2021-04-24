import React from "react";
import bgImage from "../../../../images/webp/image4.webp";
import { Icon } from "rsuite";
import CircleCircle from "../../../SharableComponents/CenterCenter/CenterCenter";
import { useLanguage } from "../../../LanguageProvider/LanguageProvider";
const Review1 = ({ reviewTextEn, reviewerEn }) => {
  const {language}=useLanguage()
  return (
    <>
    <CircleCircle bgImg={bgImage} overlay="black">
    <div className=" text-center" style={{ height: "100%" }}>
        <div className="container text-center pt-5 pb-5">
          <p className={language==="ar"?"arabic":""} style={{ color: "white", fontSize: "20px" }}>
            <Icon
              icon={language==="ar"?"quote-right":"quote-left"}
              size="lg"
              style={{ color: "white", marginRight: "10px" ,marginLeft: "10px"}}
            />
            {reviewTextEn}
            <Icon
              icon={language==="ar"?"quote-left":"quote-right"}
              size="lg"
              style={{ color: "white", marginLeft: "10px",marginRight: "10px" }}
            />
          </p>
          <div className="reviewerNameContainer d-flex justify-content-center mt-5">
            <div
              className="reviewerName review1-960"
            >
              <p className={language==="ar"?"arabic":""}>{reviewerEn}</p>
            </div>
          </div>
        </div>
      </div>
    </CircleCircle>
    </>
  );
};

export default Review1;
