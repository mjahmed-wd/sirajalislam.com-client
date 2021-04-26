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
          <p style={{ fontSize: "25px" }}> {language==="en"?`Siraj Al Islam`:`سراج الإسلام`}</p>
          <p style={{ fontSize: "20px" }}>
            {language==="en"?`Managing Partner, One 2 One Legal LLP`:`المدير الشريك`}
          </p>
          <p  style={{direction:"ltr"}}>{language==="en"?`Tel:`:`الهاتف:`} <b>+966595528968</b></p>
          <p>siraj@one2onelegal.com</p>
          <p>Awarded best lawyer in Saudi Arabia</p>
          <p>Awarded best boutique law firm in Saudi Arabia</p>
        </div>
      </DetailsComponentLeft>
      <ImageContainerForReview3 />
    </>
  );
};

export default Section5;
