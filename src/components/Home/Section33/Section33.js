import React from "react";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import img from "../../../images/webp/image40.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section33 = () => {
  const { language } = useLanguage();
  return (
    <DetailsComponentRight img={img}>
      {language === "en" ? (
        <>
          <ul>
            <li>
              Advised the Royal Commission for Riyadh on the technical drafting
              of the contracts related to the $22.5 billion King Abdulaziz
              Project for Riyadh Public Transport (KAPRPT).{" "}
            </li>
            <li>
              Advised Veolia on its management contract with the National Water
              Company of the Kingdom of Saudi Arabia, including drafting
              complicated amendments to rationalise the contract to manage the
              changes that developed after the project implementation.
            </li>
            <li>
              Led the Sudair and Al Kharj Industrial Cities (BOT) biding process
              for the Veolia let consortium.
            </li>
            <li>
              Advised waste water company on its management contract with the
              National Water Company of the Kingdom of Saudi Arabia, including
              drafting complicated amendments to rationalise the contract to
              manage the changes that developed after the project implementation
            </li>
            <li>
              Advised and structured and drafted BOT / BOO based project in
              connection to a de -militarization facility in the Kingdom of
              Saudi Arabia.{" "}
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>
              تقديم المشورة للهيئة الملكية بالرياض بشأن الصياغة الفنية للعقود
              المتعلقة بمشروع الملك عبد العزيز للنقل العام بالرياض والذي تبلغ
              قيمته 22.5 مليار دولار.
            </li>
            <li>
              تقديم المشورة لشركة Veolia بشأن عقد إدارتها مع شركة المياه الوطنية
              بالمملكة العربية السعودية ، بما في ذلك صياغة تعديلات معقدة لترشيد
              العقد لإدارة التغييرات التي تطورت بعد تنفيذ المشروع.
            </li>
            <li>
              قيادة عملية عرض مدن سدير والخرج الصناعية وفق نموذج البناء والتشغيل
              ونقل الملكية (BOT) لمجموعة شركات Veolia.
            </li>
            <li>
              تقديم المشورة لشركة مياه الصرف الصحي بشأن عقد إدارتها مع شركة
              المياه الوطنية بالمملكة العربية السعودية ، بما في ذلك صياغة
              تعديلات معقدة لترشيد العقد لإدارة التغييرات التي تطورت بعد تنفيذ
              المشروع.
            </li>
            <li>
              تقديم المشورة وهيكلة وصياغة مشروع قائم على نموذج البناء والتملك
              والتشغيل BOO ونموذج البناء والتشغيل ونقل الملكية BOT يتعلق بمنشأة
              نزع السلاح في المملكة العربية السعودية.
            </li>
          </ul>
        </>
      )}
    </DetailsComponentRight>
  );
};

export default Section33;
