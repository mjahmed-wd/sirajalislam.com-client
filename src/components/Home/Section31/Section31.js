import React from "react";
import DetailsComponentBottom from "../../SharableComponents/DetailsComponent/DetailsComponentBottom";
import img from "../../../images/webp/section31top.webp";
import laptopImg from "../../../images/webp/Dammam-Waste.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
const Section31 = () => {
  const { language } = useLanguage();
  return (
    <DetailsComponentBottom img={img}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <CenterCenter>
            {language === "en" ? (
              <>
                <p className="oneFifthRem">
                  Having worked on numerous IPP, IWPP’s it was a pleasure to
                  work on the ‘first of its kind’, independent sewage treatment
                  plant (ISTP), Build Own Operate Transfer (BOOT) concession
                  model with a tenor of 25 years, in Dammam West.
                </p>
                <p className="oneFifthRem">
                  Negotiated all the project agreements including the STA, EPC,
                  O&M, and financial term sheet.
                </p>
                <p className="oneFifthRem">
                  The consortium was not successful for the Dammam West based on
                  pricing; however, we took the lessons from this and ultimately
                  the consortium was successful on the Jeddah Airport 2, ISTP.
                </p>
              </>
            ) : (
              <>
                <p className="oneOneRem arabic">
                  بعد أن عملت ون تو ون في العديد من مشاريع منتج الطاقة المستقل
                  IPP ، ومنتج المياه والطاقة المستقلIWPP كانت فرصة جيدة للشركة
                  تقديم المشورة لأول مشروع من نوعه يختص بمحطة مستقلة لمعالجة
                  مياه الصرف الصحي (ISTP), وفق نموذج البناء والتشغيل والتملك
                  ونقل الملكية ( BOOT) لمدة 25 سنة في غرب الدمام.
                </p>
                <br />
                <p className="oneOneRem arabic">
                  تم التفاوض على جميع اتفاقيات المشروع بما في ذلك نموذجSTA
                  ونموذج الهندسة والمشتريات والتشييد EPC ونموذج التشغيل والإدارة
                  O&M وبيان الشروط المالية.
                </p>
                <br />
                <p className="oneOneRem arabic">
                  لم يكن الكونسورتيوم ناجحًا في الدمام بناءً على التسعير. ومع
                  ذلك ، أخذنا الدروس من هذا ، وفي النهاية نجح الكونسورتيوم في
                  مشروع محطة معالجة مياه الصرف الصحي المستقل في مطار جدة 2 ،
                  ISTP. .
                </p>
              </>
            )}
          </CenterCenter>
        </div>
        <div className="col-md-6 col-sm-12">
          <img src={laptopImg} alt="" className="w-100 p-2" />
        </div>
      </div>
    </DetailsComponentBottom>
  );
};

export default Section31;
