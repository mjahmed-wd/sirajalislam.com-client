import React from "react";
import TextImg from "../../SharableComponents/Text-Img/TextImg";
import bgImg from "../../../images/webp/image16.webp";
import sirajPic from "../../../images/webp/image12.webp";
import ImageContainerForReview3 from "../Review/Review2/imageContainerForReview3";

const Section5 = () => {
  return (
    <>
      <TextImg bgImg={bgImg} mobilePosition={"right"} pcPosition={"right"}>
        <div className="text-center">
          <img
            src={sirajPic}
            alt=""
            className="w-50"
            style={{ border: "10px solid #999999", borderRadius: "50%" }}
          />
          <p style={{ fontSize: "25px" }}> Siraj Al Islam</p>
          <p style={{ fontSize: "20px" }}>
            Managing Partner, One 2 One Legal LLP
          </p>
          <p>Tel: +966-5955 28968</p>
          <p>siraj@one2onelegal.com</p>
          <p>Awarded best lawyer in Saudi Arabia</p>
          <p>Awarded best boutique law firm in Saudi Arabia</p>
        </div>
      </TextImg>
      <ImageContainerForReview3 />
    </>
  );
};

export default Section5;
