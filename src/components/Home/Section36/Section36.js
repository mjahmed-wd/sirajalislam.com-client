import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image45.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section36 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
        topText={language==="en"?`Corporate M&A / Capital Markets`:`
        عمليات الدمج والاستحواذ للشركات / أسواق رأس`}
        title={language==="en"?`Case Study: SALIC - Saudi Agricultural and Livestock
        Investment Company (a PIF company) acquisition of Daawat
  `:`المال دراسة حالة: SALIC - الشركة السعودية للاستثمار الزراعي و الإنتاج الحيواني تستحوذ على شركة دعوات`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section36;
