import React from "react";
import CenterCenter from "../CenterCenter/CenterCenter";
const DetailsComponentLeft = ({ children,img }) => {
  return (
    <div className="row">
      <div
        className="col-md-8 col-sm-12"
        // height: window.innerHeight < 600 ? "100%" : "100vh asil test korar lagi change korsi"
        style={{ height: window.innerHeight < 600 ? "100%" : "100%" }}
      >
        <CenterCenter>
            {
                children
            }
        </CenterCenter>
      </div>
      <div
        className="col-md-4 col-sm-12"
        style={{
          height: window.innerHeight < 600 ? "100%" : "100%",
        // height: window.innerHeight < 600 ? "100%" : "100vh asil test korar lagi change korsi"
          padding: "0",
        }}
      >
        <img src={img} alt="" style={{ height: "100vh", width: "100%" }}
        />
      </div>
    </div>
  );
};

export default DetailsComponentLeft;
