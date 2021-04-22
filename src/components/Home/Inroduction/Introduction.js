import React from "react";
import logo from "../../../images/webp/image2.webp";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="row justify-content-center overlay">
        <div className="col-10 align-self-center">
          <div>
            <div
              className="text-center"
            >
              <h2>Personal Profile</h2>
              <img src={logo} alt="" className={window.innerWidth<600?"w-100":"w-50"} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
