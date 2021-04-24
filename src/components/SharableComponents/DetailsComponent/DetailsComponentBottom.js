import React from "react";
const DetailsComponentBottom = ({ children, img }) => {
  return (
    <>
    <div className="hundred10p-100vh"
      // style={{
      //   minHeight: window.innerWidth<600?"110%":"100vh",
      // }}
    >
      <div
        className="row justify-content-center "
        style={{ width: "100%", height: "100%" }}
      >
        <img src={img} alt="" style={{ width: "100%" }} />
{/*  No 13 image was like this
        <div className="align-self-center">
          <img src={img} alt="" style={{ width: "100%" }} />
        </div> */}
        <div className=" align-self-center"> <div className="p-2">
            {
                children
            }
            </div></div>
      </div>
    </div>
    {/* <hr/> */}
    </>
  );
};

export default DetailsComponentBottom;
