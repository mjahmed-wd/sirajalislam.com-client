import React from "react";
import CircleCircle from "../CenterCenter/CenterCenter";
import bgImg from "../../../images/webp/image14.webp";
import bgCircle from "../../../images/webp/circle.png";

const MainCircle = ({children}) => {
  return (
    <CircleCircle bgImg={bgImg}>
        <div style={{transform: "scale(.9)"}}>
      <div
        className="text-center"
        style={{
          height: "80vh",
          backgroundImage: `url(${bgCircle})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "contain",
          backgroundPosition: "center",
        }}
      >
        <div className='d-flex align-items-center justify-content-center' style={{height:'100%'}}>
            <p style={{color:'white',fontSize:'25px',fontWeight:'600'}}>
                {
                    children
                }
            </p>
        </div>
      </div>
      </div>
    </CircleCircle>
  );
};

export default MainCircle;
