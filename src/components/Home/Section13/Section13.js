import React from "react";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/imageTower.png";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";
const Section13 = () => {
    const title = `BAKER BOTTS, LLP
  – RIYADH, SAUDI ARABIA`
  const year = `2009-11`;
  const designation = `Associate
  – Global Projects, Islamic Banking & Project Finance`;
  const subtitle = `As principal lawyer drafted and guided multiple complex transactions, managed other associates and client
  relations.`;
  const list = [
    {
      data: `Structured and corrected erroneous Shariah documents drafted by opposing counsel.`,
    },
    {
      data: `Restructured a major Saudi construction contractor’s financial obligation. `,
    },
    {
      data: ` Managed the restructuring and refinancing of a major petrochemical project in the
      Kingdom of Saudi Arabia, comprising of term loan, refinancing, revolving and standby
      facilities with US Dollars and Riyal tranches.
      `,
    },
    {
      data: ` Led restructuring and refinancing related to a petrochemical company’s project costs
      overrun requirements.
      `,
    },
    {
      data: `Reviewed finance/project documents and legal opinions related to SEC’s Riyadh PP11
      independent power project. `,
    },
    {
      data: `Oversaw structuring and drafting BOT/BOO based full encompassing project documents
      for demilitarisation facility `,
    },
    {
      data: `Structured a major company’s mobile personalisation services to the Kingdom of Saudi
      Arabia. `,
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

export default Section13;
