import React from "react";
import DetailsComponentBottom from "../../SharableComponents/DetailsComponent/DetailsComponentBottom";
import img from "../../../images/webp/image36.webp";
import laptopImg from "../../../images/webp/laptop.webp";
const Section29 = () => {
  return (
    <DetailsComponentBottom img={img}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={laptopImg} alt="" className="w-100" />
        </div>
        <div className="col-md-6 col-sm-12">
          <p className="oneFifthRem">
            I was asked to provide second opinion legal advice to the King
            Abdulaziz Project for Public Transport in Riyadh city (the
            “Project”), on concession contract drafting.
          </p>
          <p className="oneFifthRem">
            I provided a line by line detailed legal analysis and drafting
            advise, that considered legal, commercial, and financial issues.
            Having been a public procurement lawyer in London and having dealt
            with transport, school, hospital and defense, the challenge was to
            come up with a draft agreement that was significantly shorter that
            what we are used to in the international PPP / PFI market. The
            delivered product was described as “ideal”.
          </p>
        </div>
      </div>
    </DetailsComponentBottom>
  );
};

export default Section29;
