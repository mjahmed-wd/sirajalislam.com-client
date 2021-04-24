import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
// import logo from "../../../images/webp/image12.webp";

const CenterCenter = ({ children, bgImg, overlay }) => {
  const { language } = useLanguage();
  return (
    <div
      className="center-100p-100vh"
      style={{ backgroundImage: `url(${bgImg})`, backgroundSize: "cover" }}
    >
      <div
        className={`row justify-content-center ${
          overlay === "black" ? "overlay-black" : "no-overlay"
        }`}
        style={{ width: "100%", height: "100%" }}
      >
        <div className="col-12 align-self-center">
          <div className={`${language==="ar"?"arabic":""} p-2 text-justify`}>
            
        {
            children
        }
          </div>
        </div>
      </div>
    </div>
  );
};

export default CenterCenter;
