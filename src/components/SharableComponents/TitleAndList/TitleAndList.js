import React from "react";

const TitleAndList = ({ title,year, designation, subtitle, list }) => {
  return (
    <>
      <div className="d-flex justify-content-between">
        <p className="mini-title">
          {title}
        </p>
        <p>{year}</p>
      </div>
      <div className="designation">
        <b>{designation}</b>
      </div>
      <p className="mini-subtitle">
        {
            subtitle
        }
      </p>
      <ul>
        {list.map((li) => (
          <li>{li.data}</li>
        ))}
        {/* <li>
          Handled all Islamic finance matters for the firm with 90% of billable
          time spent on developing personal clients as opposed to existing firm
          clientele.
        </li>
        <li>
          Advised on strategic risk and legal structuring for a new energy
          holding management company being established to penetrate and dominate
          the renewable energy sector
        </li>
        <li>
          Guided a MENA-centric investment bank on a Shariah compliant purchase
          of an offshore oil rig.
        </li>
        <li>
          Advised a consortium of the Qurayyah Independent Power Project 1 on
          building a facility to generate approximately 1800 MW of electricity.
        </li>
        <li>
          Counselled a consortium on Al Kharj and Sudair concession contract for
          construction, management, operation, and maintenance of potable water,
          industrial, irrigation, sanitary, and industrial water drainage
          facilities.
        </li>
        <li>
          Created documents for a novel Murabaha facility provided to a trading
          company by its founding shareholders.
        </li>
        <li>
          Consulted an investor on bank and finance documents in relations to
          the acquisition of a hospital group.
        </li>
        <li>
          Delivered sound counsel to a leading automotive distributor in regard
          to existing financial obligations.
        </li>
        <li>
          Advised on and drafted an amendment agreement for wastewater services
          in the central region of Saudi Arabia.
        </li>
        <li>
          Counselled one of the largest Saudi conglomerates on strategic
          corporate and financial matters.
        </li>
        <li>
          Drafted Shariah compliance documentation for a real estate fund.
        </li> */}
      </ul>
    </>
  );
};

export default TitleAndList;
