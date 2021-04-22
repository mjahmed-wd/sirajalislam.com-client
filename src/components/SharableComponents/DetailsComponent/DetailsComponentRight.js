import React from "react";
import CenterCenter from "../CenterCenter/CenterCenter";
const DetailsComponentRight = ({ children, img }) => {
  return (
    <>
    <div className="row">
      <div
        className="col-md-6 col-sm-12"
        style={{
          minHeight: window.innerWidth<600?"50vh":"100vh",
          padding: "0",
        }}
      >
        <img src={img} alt="" style={{ width: "100%" }} />
      </div>
      <div
        className="col-md-6 col-sm-12"
        style={{ minHeight: window.innerWidth<600?"110%":"100vh" }}
      >
        <CenterCenter> <div className="pt-2 pb-2">
            {
                children
            }
            </div></CenterCenter>
      </div>
    </div>
    {/* <hr/> */}
    </>
  );
};

export default DetailsComponentRight;
