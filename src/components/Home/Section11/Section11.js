import React from "react";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/image18.webp.png";
const Section11 = () => {
  return (
    <div className="row">
      <div
        className="col-md-3 col-sm-12"
        style={{
          height: window.innerHeight < 600 ? "100%" : "100vh",
          padding: "0",
        }}
      >
        <img src={img} alt="" style={{ height: "100%", width: "100%" }} />
      </div>
      <div
        className="col-md-9 col-sm-12"
        style={{ height: window.innerHeight < 600 ? "100%" : "100vh" }}
      >
        <CenterCenter>
          <div className="d-flex justify-content-between pt-3 pb-3">
            <b>ONE 2 ONE LEGAL, LLP – RIYADH, SAUDI ARABIA </b>
            <small>2013-Present</small>
          </div>
          <b>Managing Partner</b>
          <i>
            One 2 One Legal LLP, recognised as the best boutique law firm in
            Saudi Arabia provides “magic circle,” “white shoe” firm quality on a
            local market price dynamic specifically on client relationship
            demand. As Managing Partner, Siraj Al Islam has been awarded the
            best lawyer in Saudi Arabia.
          </i>
          <ul className="pt-3 pb-3" style={{ marginLeft: "-15px" }}>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              Leads and manages the work of a group of Saudi lawyers, ensuring
              client demands are met.
            </li>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              Advises government, sponsors, and lenders on complex transport,
              waste, and water projects (Riyadh Bus Project, ISTP Dammam, ISTP
              Jeddah).
            </li>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              Regularly leads complex M&A and investment fund transactions,
              involving structuring, drafting and negotiating share purchase and
              shareholder agreements, prospectuses and all other related
              documents.
            </li>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              Routinely structures, leads and manages cross-border JV agreements
              as well as franchise, agency and distribution agreements.
            </li>
            <li className="pb-2" style={{ fontSize: "15px" }}>
              Leads and manages multi-jurisdictional litigation involving
              complex legal and regulatory issues
            </li>
            <div className="text-center pt-5 pb-5">
              <b>*****Awarded Best Lawyer in Saudi Arabia *****</b>
              <br />
              <b>*****Awarded Best Boutique Law Firm in Saudi Arabia*****</b>
            </div>
          </ul>
        </CenterCenter>
      </div>
    </div>
  );
};

export default Section11;
