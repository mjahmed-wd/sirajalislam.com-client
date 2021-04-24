import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const CardComponent = ({ title, children }) => {
  const {language}=useLanguage()
  return (
    <div className={`${language==="ar"?"arabic":""} col-md-4 col-sm-12 mb-3 hundred10p-100vh-v720`} 
    // style={{minHeight:window.innerWidth<720?"110%":"100vh"}}
    >
      {/* Card component for making table in section 16 */}
      <div className="shadow-lg m-2 p-2 bg-white rounded text-center table-height" >
        <b className="mini-title oneOneRem">{title}</b>
        <hr style={{ borderTop: "1px dashed #999999" }} />
        {children}
      </div>
    </div>
  );
};

export default CardComponent;
