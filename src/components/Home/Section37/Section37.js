import React from "react";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/image53.webp";
import laptopImg from "../../../images/webp/laptop3.webp";
const Section34 = () => {
  return (
    <DetailsComponentLeft img={img}>
      <div className="d-flex justify-content-center">
        <img src={laptopImg} alt="" className={window.innerWidth<600?"w-100":"w-50"} />
      </div>
      <p>
      <p>
          Having worked on numerous M&A transactions, both buyer / seller side,
          it was a pleasure to advice SALIC, a wholly owned subsidiary of the
          Public Investment Fund (PIF), the sovereign wealth fund of the Kingdom
          of Saudi Arabia in its acquisition of 29.91% stake in Daawat Foods Ltd
          from India Agri Business Fund, as part of the Kingdom of Saudi
          Arabia’s strategic food security program.{" "}
        </p>
      </p>
    </DetailsComponentLeft>
  );
};

export default Section34;
