import React from "react";
import logo from "../../../images/webp/image2.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import MainCircle from "../../SharableComponents/MainCicle/MainCircle";
import "./Introduction.css";
import bgImg from "../../../images/webp/image1.webp"
import logoWithText from "../../../images/webp/introwithtext.png" 
import logoWithTextAr from "../../../images/webp/introwithtextAr.png" 
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";

const Introduction = () => {
  const { language } = useLanguage();
  return (
    // solution 1 with 2 language
    // <div className="introduction" id="profile">
    //   <div className="row justify-content-center overlay">
    //     <div className="col-10 align-self-center">
    //       <div>
    //         <div className="text-center">
    //           {language === "en" ? (
    //             <h2>Personal Profile</h2>
    //           ) : (
    //             <h2 className="arabic" style={{ fontSize: "4rem" }}>
    //               الملف الشخصي
    //             </h2>
    //           )}
    //           <img src={logo} alt="" className="width50-100" />
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>


    // solution 2 with 2 img
    <div
      // className="center-100p-100vh"
      style={{ height:"100vh", backgroundSize: "cover" }}
    >
      <div
        className="row justify-content-center"
        style={{ width: "100%", height: "100%" }}
      >
        <div className="col-12 align-self-center">
          <div className={`${language==="ar"?"arabic":""} p-2 text-justify`}>
            
          <div 
          className="responsiveScale"
          // style={{transform: "scale(1)"}}
          >
      <div
        className="text-center main-circle shadow p-3 mb-5 bg-white rounded"
        style={{
          // height: window.innerWidth<600?"50vh":"100vh", replaced with class main-circle
          backgroundImage: `url(${language==="en"?logoWithText:logoWithTextAr})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
      </div>
      </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
