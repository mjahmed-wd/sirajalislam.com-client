import React from "react";
const RectangleWithText = ({ topText, title, bgImg }) => {
  return (
    <div
      style={{
        height: "100vh",
        backgroundImage: `url(${bgImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="row justify-content-center overlay-black">
        <div className="col-9 align-self-center text-center mini-title">
          <p className="pb-5">{topText}</p>
          <div
            className="mini-title"
            style={{ border: "5px solid rgb(209, 209, 209)", padding: "5%" }}
          >
            <p>
              {title}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RectangleWithText;
