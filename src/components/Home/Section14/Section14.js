import React from "react";
import DetailsComponentBottom from "../../SharableComponents/DetailsComponent/DetailsComponentBottom";
import img from "../../../images/webp/top1.webp";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const Section14 = () => {
const {language}=useLanguage()

  const title = `CLIFFORD CHANCE, LLP – RIYADH, SAUDI ARABIA`;
  const titleAr = `مكتب كليفورد شانس ال ال بي، الرياض المملكة العربية السعودية`;
  const year = `2007-2009`;
  const yearAr = `2007-2009`;
  const designation = `Associate, Islamic Banking & Project Finance`;
  const designationAr = `محام – الخدمات المصرفية الإسلامية وتمويل المشاريع`;
  const subtitle = `Drafted and advised on innovative transactions and legal issues for the Kingdom of Saudi Arabia`;
  const subtitleAr = `صياغة وتقديم المشورة بشأن معاملات مبتكرة ومسائل قانونية مختلفة في المملكة العربية السعودية.

  تقديم المشورة بشأن عمليات تورق خاصة بالسيارات وإصدار صكوك متوافقة مع الشريعة الإسلامية.`;
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
  const listAr=[
    {data:`إعداد وثائق التمويل الإسلامي القائمة على الإجارة لتطوير مجمع أمين الإيثلين بقيمة 195 مليون دولار.`},
    {data:`تقديم المشورة القانونية بخصوص تسهيلات قرض لأجل متعدد الاختصاصات القضائية بقيمة 325 مليون دولار أمريكي وتسهيلات قرض لأجل بقيمة 300 مليون دولار أمريكي.`},
    {data:`إدارة قروض مدارة وقروض لأجل بتسهيلات إيتمانية بقيمة 135 مليون دولار أمريكي.`},
    {data:`إبرام عقود واتفاقيات مرابحة نيابة عن البنوك الإسلامية.`},
    {data:`تسليم المستندات الأمنية / الخارجية ، والسندات الإذنية ، وتفويض المحامين.`},
    {data:`قيادة عملية مبيعات ومشتريات ، وإعادة تأجير الأصول لمجموعة مستشفيات.`},
  ]
  return (
    <DetailsComponentBottom img={img}>
      {language === "en" ? (
        <TitleAndList
          title={title}
          year={year}
          designation={designation}
          subtitle={subtitle}
          list={list}
        />
      ) : (
        <TitleAndList
          title={titleAr}
          year={yearAr}
          designation={designationAr}
          subtitle={subtitleAr}
          list={listAr}
        />
      )}
    </DetailsComponentBottom>
  );
};

export default Section14;
