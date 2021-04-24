import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image26.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section19 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
        topText={language==="en"?`Islamic Banking / Financing / Project Finance`:`المصرفية الإسلامية / التمويل / تمويل المشاريع`}
        title={language==="en"?`Case Study A: Abraj Al Bait (Makkah Clock Tower),
Makkah, Kingdom of Saudi Arabia
`:`دراسة حالة أ: أبراج البيت (برج ساعة مكة) ، مكة المكرمة ، المملكة العربية السعودية`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section19;
