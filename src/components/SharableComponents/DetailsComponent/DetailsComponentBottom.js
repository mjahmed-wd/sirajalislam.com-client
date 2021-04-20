import React from "react";
const DetailsComponentBottom = ({ children, img }) => {
  return (
      <div
        style={{
          height: window.innerWidth < 600 ? "100%" : "100vh",
        }}
      >
        <div
          className="row justify-content-center "
          style={{ width: "100%", height: "100%" }}
        >
          <div className="align-self-center">
            <img src={img} alt="" style={{ width: "100%" }} />
          </div>
          <div className=" align-self-center">{children}</div>
        </div>
      </div>
  );
};

export default DetailsComponentBottom;
