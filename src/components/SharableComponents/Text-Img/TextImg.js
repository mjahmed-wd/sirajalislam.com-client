import React from "react";


const TextImg = ({ children,bgImg, mobilePosition,pcPosition }) => {
  return (
    <div className="timeline-bg" style={{backgroundImage: `url(${bgImg})`,backgroundPosition: window.innerWidth < 600 ?mobilePosition:pcPosition}}>
      <div className={window.innerWidth < 600 ? "overlay-white" : ""}>
        <div className="container d-flex justify-content-start pt-5 pb-5">
          <div className="align-self-center">
            {
                children
            }
          </div>
        </div>
      </div>
    </div>
  );
};

export default TextImg;
