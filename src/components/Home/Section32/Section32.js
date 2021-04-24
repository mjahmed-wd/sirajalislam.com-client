import React from "react";
import RectangleWithText from "../../SharableComponents/RectangleWithText/RectangleWithText";
import bgImg from "../../../images/webp/image42.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section32 = () => {
  const {language}=useLanguage()
  return (
    <>
      <RectangleWithText
        title={language==="en"?`Deal List: Public-Private Partnership (PPP)
  `:`قائمة الصفقات: الشراكة بين القطاعين العام والخاص (PPP)`}
        bgImg={bgImg}
      />
    </>
  );
};

export default Section32;
