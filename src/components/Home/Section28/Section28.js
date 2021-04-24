import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image35.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section28 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
      topText={language==="en"?`Public-Private Partnership (PPP)`:`الشراكة بين القطاعين العام والخاص
      (PPP)`}
        title={language==="en"?`
        Case Study A: King Abdulaziz Project for Public
Transport in Riyadh City, Riyadh, Kingdom of Saudi
Arabia
  `:`دراسة حالة أ: أبراج البيت (برج ساعة مكة) ، مكة المكرمة ،
  المملكة العربية السعودية`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section28;
