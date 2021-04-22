import React from "react";
// import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/section12.webp";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";
const Section12 = () => {
    const title = `DEWEY & LEBOEUF, LLP (SQUIRE PATTON BOGGS) – RIYADH, 
    SAUDI ARABIA`;
    const year = `2011-13`;
    const designation = `Senior Associate – Islamic Banking & Project Finance
    `;
    const subtitle = `Recruited on a fast track partnership and served as firm’s global expert on Islamic banking and finance transaction.  Served as principal strategic legal advisor for one of the world’s largest business/risk consultancy organisations.
    `;
    const list = [
      {
        data: `Handled all Islamic finance matters for the firm with 90% of billable time spent on developing personal clients as opposed to existing firm clientele.
        `,
      },
      {
        data: `Advised on strategic risk and legal structuring for a new energy holding management company being established to penetrate and dominate the renewable energy sector.
        `,
      },
      {
        data: `Guided a MENA-centric investment bank on a Shariah compliant purchase of an offshore oil rig.
        `,
      },
      {
        data: `Advised a consortium of the Qurayyah Independent Power Project 1 on building a facility to generate approximately 1800 MW of electricity.
        `,
      },
      {
        data: `Counselled a consortium on Al Kharj and Sudair concession contract for construction, management, operation, and maintenance of potable water, industrial, irrigation, sanitary, and industrial water drainage facilities.
        `,
      },
      {
        data: `Created documents for a novel Murabaha facility provided to a trading company by its founding shareholders.
        `,
      },
      {
        data: `Consulted an investor on bank and finance documents in relations to the acquisition of a hospital group`,
      },
      {
        data: `Delivered sound counsel to a leading automotive distributor in regard to existing financial obligations`,
      },
      {
        data: `Advised on and drafted an amendment agreement for wastewater services in the central region of Saudi Arabia.
        `,
      },
      {
        data: `Counselled one of the largest Saudi conglomerates on strategic corporate and financial matters.
        `,
      },
      {
        data: `Drafted Shariah compliance documentation for a real estate fund.
        `,
      },
    ];
  return (
    <DetailsComponentLeft img={img}>
      <TitleAndList
        title={title}
        year={year}
        designation={designation}
        subtitle={subtitle}
        list={list}
      />
    </DetailsComponentLeft>
  );
};

export default Section12;
