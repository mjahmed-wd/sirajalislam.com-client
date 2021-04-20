import React from "react";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/image15.webp";
const Section7 = () => {
  return (
    <div className="row">
      <div
        className="col-md-3 col-sm-12"
        style={{ height: "100vh", padding: "0" }}
      >
        <img src={img} alt="" style={{ height: "100%", width: "100%" }} />
      </div>
      <div className="col-md-9 col-sm-12" style={{ height: "100vh" }}>
        <CenterCenter>
          <h6 className="text-center p-3">GENERAL COUNSEL / PARTNER</h6>
          <p className="pb-3" style={{ fontSize: "15px" }}>
            A highly rated award-winning legal advisor and recognised expert in
            Islamic Project Finance and Restructuring offers proven success in
            generating new business, strong legal presence in business
            relations, negotiations, and litigation, and leadership regarding
            risk management/mitigation. Leads project management, due diligence,
            and corporate transactions such as M&As, JVs, and divestitures.
            Experience spans diverse industries and multimillion/billion-dollar
            assignments with international partners. Recognised for innovation
            and legal leadership by clients and leading industry publications.
          </p>
          <b className="pb-3" style={{ fontSize: "15px" }}>
            Business partner with broad experience in M&A activity and organic
            growth that spans multiple industries and markets.
          </b>
          <ul className="pt-3 pb-3" style={{ marginLeft: "-15px" }}>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              As General Counsel governed the legal activities for 70 companies
              and spear- headed the due diligence on the £4 billion acquisition
              and reﬁnance of ISS by Goldman Sachs in the UK.
            </li>
            <li className="pb-2">
              Advised the Saudi Agriculture and Livestock Investment Company
              (SALIC), a wholly owned subsidiary of the Public Investment Fund
              (PIF) as part of the Kingdom of Saudi Arabia’s strategic food
              security program.
            </li>
          </ul>
        </CenterCenter>
      </div>
    </div>
  );
};

export default Section7;
