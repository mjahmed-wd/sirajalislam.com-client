import React from "react";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/imageTower.png";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";
const Section11 = () => {
  const title = `ONE 2 ONE LEGAL, LLP – RIYADH, SAUDI ARABIA`;
  const year = `2013-Present`;
  const designation = `Managing Partner`;
  const subtitle = `One 2 One Legal LLP, recognised as the best boutique law firm in Saudi Arabia provides “magic circle,” “white shoe” firm quality on a local market price dynamic specifically on client relationship demand. As Managing Partner, Siraj Al Islam has been awarded the best lawyer in Saudi Arabia.`;
  const list = [
    {
      data: `Leads and manages the work of a group of Saudi lawyers, ensuring client demands are met.`,
    },
    {
      data: `Advises government, sponsors, and lenders on complex transport, waste, and water projects (Riyadh Bus Project, ISTP Dammam, ISTP Jeddah).`,
    },
    {
      data: `Regularly leads complex M&A and investment fund transactions, involving structuring, drafting and negotiating share purchase and shareholder agreements, prospectuses and all other related documents.`,
    },
    {
      data: `Routinely structures, leads and manages cross-border JV agreements as well as franchise, agency and distribution agreements.`,
    },
    {
      data: `Leads and manages multi-jurisdictional litigation involving complex legal and regulatory issues`,
    },
    
  ];

  return (
    <DetailsComponentRight img={img}>
      <TitleAndList
        title={title}
        year={year}
        designation={designation}
        subtitle={subtitle}
        list={list}
      />
    </DetailsComponentRight>
  );
};

export default Section11;
