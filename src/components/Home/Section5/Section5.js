import React from "react";
import TextImg from "../../SharableComponents/Text-Img/TextImg";
import bgImg from "../../../images/webp/section5.webp";
import sirajPic from "../../../images/webp/image12.webp";
import ImageContainerForReview3 from "../Review/Review2/imageContainerForReview3";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";

const Section5 = () => {
  const {language}=useLanguage()

  return (
    <>
      <DetailsComponentLeft img={bgImg}>
      <div className={`${language==="ar"?"arabic":""} text-center`}>
          <img
            src={sirajPic}
            alt=""
            className="w-75"
            style={{ border: "10px solid #999999", borderRadius: "50%" }}
          />
          <b style={{ fontSize: "25px" ,display:"block"}}> {language==="en"?`Siraj Al Islam`:`سراج الإسلام`}</b>
          <p style={{ fontSize: "20px" }}>
            {language==="en"?`Division Head, Equity & Asset Management Legal Affairs`:`رئيس قسم الشؤون القانونيه لاداره الاسهم والاصول`}
          </p>
          <p  style={{direction:"ltr"}}>{language==="en"?`Tel:`:`الهاتف:`} <b  style={{direction:"rtl"}}>{language==="en"?"+966595528968":`966595528968`}</b></p>
          <p> me@sirajalislam.com</p>
          <p>{language==="en"?`Awarded best lawyer in Saudi Arabia`:`حائز على جائزة أفضل محام في المملكة العربية السعودية
`}</p>
          <p>{language==="en"?`Awarded best boutique law firm in Saudi Arabia`:`حصل على جائزة أفضل مكتب محاماة في المملكة العربية السعودية
`}</p>
        </div>
      </DetailsComponentLeft>
      <ImageContainerForReview3 />
    </>
  );
};

export default Section5;
