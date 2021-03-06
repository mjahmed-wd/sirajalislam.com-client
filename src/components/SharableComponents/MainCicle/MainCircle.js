import React from "react";
import CenterCenter from "../CenterCenter/CenterCenter";
import bgImg from "../../../images/webp/Section-Breaks-dark.jpg";
import bgCircle from "../../../images/webp/circle.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const MainCircle = ({children, img}) => {
  const {language}=useLanguage()
  return (
    
    <CenterCenter bgImg={bgImg}>
        <div style={{transform: "scale(.9)"}}>
      <div
        className="text-center main-circle"
        style={{
          // height: window.innerWidth<600?"50vh":"100vh", replaced with class main-circle
          backgroundImage: `url(${img||bgCircle})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className='d-flex align-items-center justify-content-center' style={{height:'100%' }}>
            <p className={`${language==="ar"?"arabic arabic-header":"circle-title"} `} style={{color:'white',fontWeight:'1000'}}>
                {
                    children
                }
            </p>
        </div>
      </div>
      </div>
    </CenterCenter>
  );
};

export default MainCircle;
