import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image28.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section21 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
        title={language==="en"?`Case Study B: Methanol Chemicals Company SJSC
          (CHEMANOL), Jubail, Kingdom of Saudi Arabia
  `:`المصرفية الإسلامية / التمويل / تمويل المشاريع
  دراسة الحالة ب: شركة كيمائيات الميثانول ش م ع
  ((كيمانول) ، الجبيل ، المملكة العربية السعودية`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section21;
