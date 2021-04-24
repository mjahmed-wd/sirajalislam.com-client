import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const RectangleWithText = ({ topText, title, bgImg }) => {
  const {language}=useLanguage()
  return (
    <div className="rectangle50vh-100vh"
      style={{
        // height: window.innerWidth<600?"55vh":"100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row justify-content-center overlay-black p-3">
        <div className={` col-9 align-self-center text-center mini-title`}>
          
          <div
            className={`${language==="ar"?"arabic":""} mini-title p-3`}
            style={{ border: "5px solid rgb(209, 209, 209)" }}
          >
            <p style={{fontSize:"1.5rem"}}>{topText}</p>
            <p style={{fontSize:"1.5rem"}}>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleWithText;
