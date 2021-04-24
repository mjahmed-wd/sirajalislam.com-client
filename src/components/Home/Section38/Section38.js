import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image48.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section38 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
        title={language==="en"?`Corporate M&A / Capital Markets Deal List 
  `:`قائمة الصفقات عمليات الدمج والاستحواذ للشركات / أسواق رأس المال`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section38;
