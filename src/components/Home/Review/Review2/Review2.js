import React from "react";
import defaultBgImage from "../../../../images/webp/image5.webp";
import { Icon } from "rsuite";
import ImageContainerForReview2 from "./ImageContainerForReview2";
import { useLanguage } from "../../../LanguageProvider/LanguageProvider";
const Review2 = ({bgImg}) => {
  const { language } = useLanguage();

  return (
    <div
      className="full-bg"
      style={{
        backgroundImage: `url(${bgImg||defaultBgImage})`,
      }}
    >
      <div className="overlay-black pt-5 pb-5">
        <div
          className={`${
            language === "ar" ? "arabic" : ""
          } container text-center pt-5 pb-5`}
        >
          <p style={{ color: "white", fontSize: "20px", margin: "50px" }}>
            <Icon
              icon={language === "ar" ? "quote-right" : "quote-left"}
              size="lg"
              style={{ color: "white", margin: "0 10px" }}
            />
            {language === "en"
              ? ` Siraj Al Islam, recognised as one of the best lawyer in Saudi Arabia`
              : `حاز سراج الاسلام على جائزة أفضل
محام في المملكة العربية السعودية`}
            <Icon
              icon={language === "ar" ? "quote-left" : "quote-right"}
              size="lg"
              style={{ color: "white", margin: "0 10px" }}
            />
          </p>

          <p style={{ color: "white", fontSize: "20px" }}>
            <Icon
              icon={language === "ar" ? "quote-right" : "quote-left"}
              size="lg"
              style={{ color: "white", margin: "0 10px" }}
            />
            {language === "en"
              ? `Siraj Al Islam manages One 2 One Legal, the firm awarded Best
            Boutique Law Firm in Saudi Arabia`
              : `سراج الإسلام يديرشركة ون تو ون للمحاماة ، الشركة التي
            حصلت على جائزة أفضل مكتب محاماة بوتيكي في المملكة العربية السعودية`}
            <Icon
              icon={language === "ar" ? "quote-left" : "quote-right"}
              size="lg"
              style={{ color: "white", margin: "0 10px" }}
            />
          </p>
        </div>
      </div>
      <ImageContainerForReview2 />
    </div>
  );
};

export default Review2;
