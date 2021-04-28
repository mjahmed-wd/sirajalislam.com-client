import React from "react";
import logo from "../../../images/webp/image2.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import MainCircle from "../../SharableComponents/MainCicle/MainCircle";
import bgImg from "../../../images/webp/image1.webp";
import logoWithText from "../../../images/webp/logo.webp";
import "./Section1.css"
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";

const Section1 = () => {
  const { language } = useLanguage();
  return (
    <div className="container mt-5">
      <div className="d-flex flex-column justify-content-around" style={{minHeight:"60vh"}}>
      <div className="shadow-lg mb-3 intro bg-white rounded text-center">
      {language === "en" ? (
                <h1 className="p-2">Personal Profile</h1>
              ) : (
                <h1 className="arabic p-2" style={{ fontSize: "4rem" }}>
                  الملف الشخصي
                </h1>
              )}
      </div>
      <div className="d-flex justify-content-center">
        <div className="shadow p-5 mb-5 bg-white text-center rounded">
        <img src={logoWithText} className="lg_75" alt=""/>

        </div>
      </div>
    </div>
    </div>
  );
};

export default Section1;
