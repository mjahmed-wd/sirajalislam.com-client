import React from "react";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import img from "../../../images/webp/education.webp";
import uniWM from "../../../images/webp/image22.webp";
import uniHT from "../../../images/webp/image23.webp";
import uniSRA from "../../../images/webp/image24.webp";
import uniTLS from "../../../images/webp/image25.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section17 = () => {
  const { language } = useLanguage();

  return (
    <div  className="educationalCertification">
      <DetailsComponentRight img={img}>
        <h1 className="text-center">
          {language === "en"
            ? `EDUCATION & CREDENTIALS`
            : `المؤهلات الأكاديمية والشهادات`}
        </h1>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              {language === "en" ? (
                <>
                  <b>MA</b>
                  <br />
                  <b>Advanced Legal Practice</b>
                </>
              ) : (
                <>
                  <b>ماجستير</b>
                  <br />
                  <b>الممارسة القانونية المتقدمة</b>
                </>
              )}
            </div>
          </div>
          <div className="col-md-6 w-100 text-center">
            <img src={uniWM} alt="" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              {language === "en" ? (
                <>
                  <b>LLB</b>
                  <br />
                  <b>Law Society Qualifying Law Degree</b>
                </>
              ) : (
                <>
                  <b>بكالوريوس القانون</b>
                  <br />
                  <b>الدرجة المؤهلة للعمل القانوني</b>
                </>
              )}
            </div>
          </div>
          <div className="col-md-6 w-100 text-center">
            <img src={uniHT} alt="" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              <b>
                {language === "en"
                  ? `Solicitor of the Senior Court of England & Wales`
                  : `محام في المحكمة العليا

يإنجلترا وويلز`}
              </b>
            </div>
          </div>
          <div className="col-md-6 w-100 text-center">
            <img src={uniSRA} alt="" style={{ width: "50%" }} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6 text-center d-flex justify-content-center align-self-center">
            <div>
              <b>
                {language === "en"
                  ? `Solicitor at Law Society of England & Wales`
                  : `محامي في جمعية القانون بإنجلترا وويلز`}
              </b>
            </div>
          </div>
          <div className="col-md-6 w-100 text-center mt-2">
            <img src={uniTLS} alt="" style={{ width: "50%" }} />
          </div>
        </div>
      </DetailsComponentRight>
    </div>
  );
};

export default Section17;
