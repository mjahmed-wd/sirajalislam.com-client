import React from "react";
import DetailsComponentBottom from "../../SharableComponents/DetailsComponent/DetailsComponentBottom";
import img from "../../../images/webp/top1.webp";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";

const Section14 = () => {
  const title = `CLIFFORD CHANCE, LLP – RIYADH, SAUDI ARABIA`;
  const year = `2007-2009`;
  const designation = `Associate, Islamic Banking & Project Finance`;
  const subtitle = `Drafted and advised on innovative transactions and legal issues for the Kingdom of Saudi Arabia`;
  const list = [
    {
      data: `Advised on auto-based securitisations with initial warehouse facility followed by Shariah compliant Sukuk issuance.`,
    },
    {
      data: `Completed Ijara-based Islamic finance documentation for a $195M development of an ethylene amines complex.`,
    },
    {
      data: `Counselled on a multijurisdictional term loan facility valued at $325M and term loan facility worth $300M.
      `,
    },
    {
      data: `Managed revolving and term loans with a letter of credit facility of $135M`,
    },
    {
      data: `Created Murabaha contracts and agreements on behalf of Islamic banks.
      `,
    },
    {
      data: `Delivered on/offshore security documents, promissory notes, and power of attorneys.`,
    },
    {
      data: `Guided sales, purchases, and leasebacks of assets for a hospital group`,
    },
  ];
  return (
    <DetailsComponentBottom img={img}>
      <TitleAndList
        title={title}
        year={year}
        designation={designation}
        subtitle={subtitle}
        list={list}
      />
    </DetailsComponentBottom>
  );
};

export default Section14;
