import React from "react";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import img from "../../../images/webp/education.webp";
import uniWM from "../../../images/webp/image22.webp";
import uniHT from "../../../images/webp/image23.webp";
import uniSRA from "../../../images/webp/image24.webp";
import uniTLS from "../../../images/webp/image25.webp.gif";
const Section17 = () => {
  return (
    <div>
      <DetailsComponentRight img={img}>
        <h1 className="text-center">EDUCATION & CREDENTIALS</h1>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              <b>MA</b>
              <br />
              <b>Advanced Legal Practice</b>
            </div>
          </div>
          <div className="col-md-6 w-100 text-center">
            <img src={uniWM} alt="" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              <b>LLB</b>
              <br />
              <b>Law Society Qualifying Law Degree</b>
            </div>
          </div>
          <div className="col-md-6 w-100 text-center">
            <img src={uniHT} alt="" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              <b>Solicitor of the Senior Court of England & Wales</b>
            </div>
          </div>
          <div className="col-md-6 w-100 text-center">
            <img src={uniSRA} alt="" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              <b>Solicitor at Law Society of England & Wales</b>
            </div>
          </div>
          <div className="col-md-6 w-100 text-center mt-2">
            <img src={uniTLS} alt="" style={{ width: "50%" }} />
          </div>
        </div>
      </DetailsComponentRight>
    </div>
  );
};

export default Section17;
