import React from "react";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import img from "../../../images/webp/image50.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section40 = () => {
  const {language}=useLanguage()
  return (
    <DetailsComponentRight img={img}>
      {language==="en"?<><ul>
        <li>
          Managed legal activities for 70 companies in relation to corporate
          governance, risk mitigation, and regulatory compliance.
        </li>
        <li>
          Provided general advice on insolvency matters, including different
          types, advice on director ’s liability and indemnities, and process of
          placing a company into liquidation.
        </li>
        <li>
          Advised on shares issues such as: increasing share capital, reducing
          share capital, division, consolidation, and redistribution of shares
        </li>
        <li>
          Conveyed expertise on directors’ and shareholders’ powers, explaining
          to the board the individual strength of directors and what business
          functions should be met at the board level and shareholder level.
        </li>
        <li>
          Generated a group -wide policy change on due -diligence requirement
        </li>
        <li>
          Advised Banque Saudi Fransi (acting as a financial advisor) on the IPO
          of 40 percent of the share capital of MTC (Zain) Saudi Arabia (the
          third GSM operator).
        </li>
        <li>
          Advised Sahara Petrochemical Company in its secondary rights and bonus
          shares offering, and on various compliance matters and ongoing
          disclosure requirements.
        </li>
        <li>
          Advised Abdullah Al Khodari Sons Company in the offering of 30% of its
          capital to the public through an IPO.
        </li>
        <li>
          {" "}
          Advised PCCW in relation to its IPO on the Saudi Stock Market,
          especially in relation to liability relating to IPO prospectus.
        </li>
      </ul></>:<>
      <ul>
        <li>تقديم المشورة لصفقة بيع شركة تجارة مواد غذائية ومشروبات إلى شركة قابضة سعودية كبرىتقديم المشورة لصفقة ببيع شركة سعودية لبنك بحريني.</li>
        <li>قيادة صفقة بيع شركة مقاولات سعودية إلى مجموعة استثمارية قطرية</li>
        <li>قيادة الفحص النافي للجهالة بشأن اكتساب وإعادة تمويل ISS من قبل جولد مان ساكس في المملكة المتحدة؛ ومراجعة وتقديم جميع الوثائق المالية لمجلس الإدارة.</li>
        <li>تقديم المشورة وصياغة اتفاقية تعديل خدمات الصرف الصحي بالمنطقة الوسطى بالمملكة العربية السعودية.</li>
        <li>تقديم المشورة بخصوص بيع شركات مقابل قيمة 40 مليون يورو و 29 مليون يورو مع استكمال العديد من عمليات المبيعات والفحص النافي للجهالة لعمليات الاستحواذ المتعددة.</li>
        <li>إعداد وإطلاق أكثر من 20 شركة في قطاعات الصناعة المتنوعة.</li>
      </ul>
      </>}
    </DetailsComponentRight>
  );
};

export default Section40;
