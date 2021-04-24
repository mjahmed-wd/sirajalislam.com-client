import React from "react";
// import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/ukFlagCroped.jpg";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
const Section34 = () => {
  const {language}=useLanguage()
  return (<>
  {
    language==="en"?<>
    
  <div className="row d-flex flex-md-row-reverse">
    <div
        className="col-md-6 col-sm-12 fiftyVh-100vh"
        // style={{
        //   minHeight: window.innerWidth<600?"50vh":"100vh",
        //   padding: "0",
        // }}
      >
        

        <img src={img} alt="" style={{  width: "100%" }} />

       
      </div>
      <div
        className="col-md-6 col-sm-12 hundred10p-100vh"
        // style={{ minHeight: window.innerWidth<600?"110%":"100vh" }}
      >
        <CenterCenter> <div className="pt-2 pb-2">
        <ul>
        <li>
          Advised on and worked on the MWDA (http://www.merseysidewda.gov.uk) -
          one of the UK’s largest ever PFI projects in the waste sector as lead
          project assistant. Developed documents that are now being used firm
          wide as initial drafts for future projects.{" "}
        </li>
        <li>
          Advised on the Department for Work and Pensions (DWP) PFI with Land
          Securities Trillium (LST).{" "}
        </li>
        <li>
          Advised on the STEPS (The Strategic Transfer of Estate to the Private
          Sector – a PFI initiative with HMRC).{" "}
        </li>
        <li>Advised on the London Underground PPP. </li>
        <li>Advised on the Sheffield City Council PFI. </li>
        <li>Advised on the Walsgrave PFI Hospital, Coventry</li>
      </ul>
            </div></CenterCenter>
      </div>
    </div>
    </>:<></>
  }
    </>
  );
};

export default Section34;
