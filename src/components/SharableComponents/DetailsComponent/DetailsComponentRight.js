import React from "react";
import CenterCenter from "../CenterCenter/CenterCenter";
const DetailsComponentRight = ({ children, img }) => {
  return (
    <div className="row">
      <div
        className="col-md-4 col-sm-12"
        style={{
          height: window.innerHeight < 600 ? "100%" : "100vh",
          padding: "0",
        }}
      >
        <img src={img} alt="" style={{ height: "100vh", width: "100%" }} />
      </div>
      <div
        className="col-md-8 col-sm-12"
        style={{ height: window.innerHeight < 600 ? "100%" : "100%" }}
      >
        <CenterCenter>{children}</CenterCenter>
      </div>
    </div>
  );
};

export default DetailsComponentRight;
