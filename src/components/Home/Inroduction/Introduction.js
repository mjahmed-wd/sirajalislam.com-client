import React from "react";
import logo from "../../../images/webp/image2.webp";
import "./Introduction.css";

const Introduction = () => {
  return (
    <div className="introduction">
      <div className="row justify-content-center overlay">
        <div className="col-6 align-self-center">
          <div style={{ border: "1px solid rgb(209, 209, 209)", margin: "-100px -100px"}}>
            <div
              className="text-center"
              style={{ border: "5px solid rgb(209, 209, 209)",margin: "100px 10%" }}
            >
              <h2>Personal Profile</h2>
              <img src={logo} alt="" className="w-50" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Introduction;
