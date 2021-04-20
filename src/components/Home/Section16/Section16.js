import React from "react";
import CardComponent from "../../SharableComponents/CardComponent/CardComponent";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import bgImg from "../../../images/webp/bottomBg.png";
const Section16 = () => {
  return (
    <CenterCenter bgImg={bgImg}>
      <div className="container">
        <div className={window.innerWidth<600?"row mt-5 mb-5":"row"}>
          <CardComponent title={`BUSINESS CONTRIBUTIONS`}>
            <ul>
              <li>
                Oversaw merger and integration for 70 companies into relevant
                sector specific businesses.
              </li>
              <li>
                Assumed control of all property management (legal and
                operational) and reduced property portfolio 60%.
              </li>
              <li>
                Saved company more than £1.3M as a result of innovative policy
                improvements
              </li>
              <li>
                Assumed control of all property management (legal and
                operational) and reduced property portfolio 60%.
              </li>
              <li>
                Oversaw representative transactions for the Department for Work
                and Pensions (DWP) PFI with Land Securities Trillium (LST),
                STEPS (Strategic Transfer of Estate to the Private Sector, a PFI
                initiative with HMRC), London Underground PPP, Sheffield City
                Council PFI, and Walsgrave PFI Hospital, Coventry
              </li>
            </ul>
          </CardComponent>
          <CardComponent title={`LEGAL CONTRIBUTIONS `}>
            <ul>
              <li>
                Managed legal activities for 70 companies in relation to
                corporate governance, risk mitigation, and regulatory compliance
                to UK and European Union standards for competition and data
                protection.
              </li>
              <li>
                Reviewed and advised on PFI project agreements, security
                documents, and collateral/interfacing agreements
              </li>
              <li>
                Drafted, negotiated, and advised on commercial agreements
                pertaining to facility management, general outsourcing, software
                development, IT, and payroll.
              </li>
              <li>
                Advised on insolvency mattes, director’s liability, indemnities,
                and process of placing company in liquidation
              </li>
              <li>
                Counselled on shares issues such as increasing and decreasing
                share capital, division and consolidation of shares, and shares
                redistribution; also provided advice on executive, board, and
                shareholders powers.
              </li>
            </ul>
          </CardComponent>
          <CardComponent title={`BLAKE MORGAN ASSIGNMENT`}>
            <ul>
              <li>
                While maintaining all regular duties and responsibilities, also
                served as Trainee Solicitor to Blake Morgan on secondment;
                worked with corporate, real estate, and litigation departments
                during this time
              </li>
              <li>
                Handled joint venture agreements, prepared sales and purchase
                agreements for acquisitions and divestures, advised on financial
                assistance and white wash procedures, and carried out commercial
                matters for ISS.
              </li>
              <li>
                Managed and negotiated commercial leases for landlord and
                tenants, licenses, rent review memos, renewals, assignments,
                surrenders, dilapidations, acquisitions/disposals of property,
                and exemptions.
              </li>
              <li>
                Prepared particulars of claim for debt, breach of contract, and
                restrictive covenant in employment contracts and negotiated
                settlements where appropriate.
              </li>
            </ul>
          </CardComponent>
        </div>
      </div>
    </CenterCenter>
  );
};

export default Section16;
