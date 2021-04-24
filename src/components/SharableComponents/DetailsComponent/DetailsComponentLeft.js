import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import CenterCenter from "../CenterCenter/CenterCenter";
const DetailsComponentLeft = ({ children, img }) => {
  const {language}=useLanguage()
  return (
    <>
      <div className="row d-flex flex-md-row-reverse">
        <div
          className="col-md-6 col-sm-12 min50vh-100vh-960"
          style={{
            padding: "0",
          }}
        >
          <img src={img} alt="" style={{ width: "100%" }} />
        </div>
        <div
          className="col-md-6 col-sm-12 hundred10p-100vh-960"
          
        >
          <CenterCenter>
            <div className={`${language==="ar"?"arabic":""} pt-2 pb-2`}>{children}</div>
          </CenterCenter>
        </div>
      </div>
      {/* <hr/> */}
    </>
  );
};

export default DetailsComponentLeft;
