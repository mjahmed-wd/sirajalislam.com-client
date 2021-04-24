import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image39.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section30 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
        title={language==="en"?`Case Study A: Dammam and Jeddah Independent
        Sewage Treatment Plant, Kingdom of Saudi Arabia
  `:`الشراكة بين القطاعين العام والخاص
  (PPP)
  دراسة الحالة ب : الدمام وجدة محطة معالجة مياه الصرف الصحي المستقلة ، المملكة العربية السعودية`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section30;
