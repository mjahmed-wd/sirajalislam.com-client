import React from "react";
// import logo from "../../../images/webp/image12.webp";

const CenterCenter = ({children,bgImg}) => {
  return (
    <div style={{height:window.innerWidth < 600 ?"100%":"100vh",backgroundImage:`url(${bgImg})`,backgroundSize:'cover'}}>
      <div className="row justify-content-center " style={{width:'100%',height:'100%'}}>
        <div className="col-12 align-self-center">
        {
            children
        }
        </div>
      </div>
    </div>
  );
};

export default CenterCenter;
