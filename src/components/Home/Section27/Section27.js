import React from "react";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/img34.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section27 = () => {
  const { language } = useLanguage();
  return (
    <DetailsComponentLeft img={img}>
      {language === "en" ? (
        <>
          <ul>
            <li>
              Advised on sale, purchase and leaseback in relation to assets of a
              hospital group.{" "}
            </li>
            <li>Advised on Murabaha contracts on behalf of Islamic banks</li>
            <li>Advised on Mudaraba agreements.</li>
            <li>
              Advised on the provision of Islamic loans from foreign
              shareholders to Saudi Arabian joint ventures.{" "}
            </li>
            <li>
              Advised on two auto based securitization with initial warehouse
              facility followed by Shariah compliant Sukuk issuance.
            </li>
          </ul>
        </>
      ) : (
        <>
          <ul>
            <li>
              تقديم المشورة بشأن بيع وشراء وإعادة استئجار أصول لمجموعة مستشفيات.
            </li>
            <li>تقديم المشورة بشأن عقود مرابحة نيابة عن بنوك اسلامية.</li>
            <li>تقديم المشورة حول اتفاقيات مضاربة.</li>
            <li>
              تقديم المشورة بشأن توفير القروض الإسلامية من المساهمين الأجانب
              للمشاريع السعودية المشتركة.
            </li>
            <li>
              تم تقديم المشورة بشأن عملية تورق لشركتي سيارات تتعلق بمستودع
              وإصدار صكوك متوافقة مع الشريعة الإسلامية.
            </li>
          </ul>
        </>
      )}
    </DetailsComponentLeft>
  );
};

export default Section27;
