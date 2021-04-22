import React from "react";
const RectangleWithText = ({ topText, title, bgImg }) => {
  return (
    <div
      style={{
        height: window.innerWidth?"50vh":"100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row justify-content-center overlay-black">
        <div className="col-9 align-self-center text-center mini-title">
          
          <div
            className="mini-title"
            style={{ border: "5px solid rgb(209, 209, 209)", padding: "5%" }}
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
