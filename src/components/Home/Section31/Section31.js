import React from "react";
import DetailsComponentBottom from "../../SharableComponents/DetailsComponent/DetailsComponentBottom";
import img from "../../../images/webp/image36.webp";
import laptopImg from "../../../images/webp/Dammam-Waste.webp";
const Section31 = () => {
  return (
    <DetailsComponentBottom img={img}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <p className="oneFifthRem">
            Having worked on numerous IPP, IWPP’s it was a pleasure to work on
            the ‘first of its kind’, independent sewage treatment plant (ISTP),
            Build Own Operate Transfer (BOOT) concession model with a tenor of
            25 years, in Dammam West.
          </p>
          <p className="oneFifthRem">
            Negotiated all the project agreements including the STA, EPC, O&M,
            and financial term sheet.
          </p>
          <p className="oneFifthRem">
            The consortium was not successful for the Dammam West based on
            pricing; however, we took the lessons from this and ultimately the
            consortium was successful on the Jeddah Airport 2, ISTP.
          </p>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={laptopImg} alt="" className="w-100 p-2" />
        </div>
      </div>
    </DetailsComponentBottom>
  );
};

export default Section31;
