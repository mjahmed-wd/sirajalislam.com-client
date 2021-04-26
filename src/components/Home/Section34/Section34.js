import React from "react";
// import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/ukFlagCroped.jpg";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
const Section34 = () => {
  const { language } = useLanguage();
  return (
    <DetailsComponentLeft img={img}>
      {language === "en" ? (
        <>
          {" "}
          <ul>
            <li>
              Advised on and worked on the MWDA
              (http://www.merseysidewda.gov.uk) - one of the UK’s largest ever
              PFI projects in the waste sector as lead project assistant.
              Developed documents that are now being used firm wide as initial
              drafts for future projects.{" "}
            </li>
            <li>
              Advised on the Department for Work and Pensions (DWP) PFI with
              Land Securities Trillium (LST).{" "}
            </li>
            <li>
              Advised on the STEPS (The Strategic Transfer of Estate to the
              Private Sector – a PFI initiative with HMRC).{" "}
            </li>
            <li>Advised on the London Underground PPP. </li>
            <li>Advised on the Sheffield City Council PFI. </li>
            <li>Advised on the Walsgrave PFI Hospital, Coventry</li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>
              تقديم المشورة لهيئة التخلص من النفايات MWDA
              (http://www.merseysidewda.gov.uk) - أحد أكبر مشاريع مبادرة التمويل
              الشخصي PFI في المملكة المتحدة في قطاع النفايات كمساعد رئيس
              للمشروع. وإعداد وثائق مطورة تستخدم الآن على نطاق واسع كمسودات
              نموذجية للمشاريع المستقبلية.
            </li>
            <li>
              تقديم المشورة حول إدارة العمل والمعاشات (DWP) PFI مع Land
              Securities Trillium (LST).
            </li>
            <li>
              تقديم المشورة بشأن STEPS (النقل الاستراتيجي للعقار إلى القطاع
              الخاص – مبادرة التمويل الشخصي PFI مع HMRC).
            </li>
            <li>
              تقديم المشورة لمشروع شراكة بين القطاعين العام والخاص في لندن PPP.
            </li>
            <li>
              تقديم المشروع لمشروع وفق نموذج مبادرة التمنويل الشخصي PFI لمجلس
              مدينة شيفيلد.
            </li>
            <li>تقديم المشورة بشأن مستشفى Walsgrave PFI في كوفنتري.</li>
          </ul>
        </>
      )}
    </DetailsComponentLeft>
  );
};

export default Section34;
