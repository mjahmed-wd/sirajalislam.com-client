import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image30.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section23 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
        title={language==="en"?`
        Deal List: Islamic Banking / Financing /
Project Finance
  `:`قائمة الصفقات: المصرفية الإسلامية / التمويل / تمويل المشاريع`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section23;
