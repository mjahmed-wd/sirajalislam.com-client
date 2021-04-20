import React from "react";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/image16.webp";
const Section8 = () => {
  return (
    <div className="row" >
      <div className="col-md-9 col-sm-12" style={{ height: "100vh" }}>
        <CenterCenter>
          <b className="text-center p-3">
            Award winning lawyer recognised as one of the only Saudi resident
            legal experts in the transport and wastewater PPP projects. 
          </b>

          <ul className="pt-3 pb-3" style={{ marginLeft: "-15px" }}>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              Provide consultative advising services to government, sponsors,
              and lenders on complex transport, waste, and water projects,
              including the Riyadh Bus Project, Independent Sewage Treatment
              Plants Dammam and Jeddah.
            </li>
            <li className="pb-2">
              Regularly advised on transport projects in the United Kingdom’s
              London Underground and Merseyside Waste Disposal Authority, one of
              the UK’s largest PFI projects in the waste sector.
            </li>
          </ul>
          <b className="text-center p-3">
            Noted expert in Islamic banking and real estate with signiﬁcant
            experience in international business and risk management.
          </b>

          <ul className="pt-3 pb-3" style={{ marginLeft: "-15px" }}>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              Advised, drafted and negotiated as sole counsel, a complete set of
              42 Islamic ﬁnance transaction documents for the Government of
              Saudi Arabia.
            </li>
            <li className="pb-2">
              Prepared Islamic ﬁnance documents for a $10 billion, Ijara-based
              Islamic ﬁnance of a downstream petrochemical complex, as well as
              Ijara-based, Islamic ﬁnance documents related to a $750 million
              development project in Makkah.
            </li>
          </ul>
        </CenterCenter>
      </div>
      <div
        className="col-md-3 col-sm-12"
        style={{ height: "100vh", padding: "0" }}
      >
        <img src={img} alt="" style={{ height: "100%", width: "100%" }} />
      </div>
    </div>
  );
};

export default Section8;
