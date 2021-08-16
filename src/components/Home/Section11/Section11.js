import React from "react";
// import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/section11.webp";
import img2 from "../../../images/webp/section12.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";
const Section11 = () => {
  const { language, setLanguage } = useLanguage();

  const title = `ONE 2 ONE LEGAL, LLP – RIYADH, SAUDI ARABIA`;
  const titleAr = `لشركة  ون تو ون للمحاماة ال ال بي- الرياض، المملكة العربية السعودية`;
  const year = `2013-2021`;
  const yearAr = `2021 – حتى الوقت الحاضر`;
  const designation = `Managing Partner`;
  const designationAr = `المدير الشريك`;
  const subtitle = `One 2 One Legal LLP, recognised as the best boutique law firm in Saudi Arabia provides “magic circle,” “white shoe” firm quality on a local market price dynamic specifically on client relationship demand. As Managing Partner, Siraj Al Islam has been awarded the best lawyer in Saudi Arabia.`;
  const subtitleAr = `شركة ون تو ون للمحاماة ال ال بي One 2 One Legal LLP، معروفة كأفضل شركة محاماة في المملكة العربية السعودية ، تقدم خدمات قانونية وفق جودة خدمات فئة مكاتب محاماة  “الدائرة السحرية” ، وفئة “الحذاء الأبيض” وتقدمها إلى  السوق المحلية بأسعار دينامكية حسب حاجة العملاء. وسراج الإسلام كالمدير الشريك، حصل على جائزة أفضل محام في المملكة العربية السعودية.`;
  const title2 = `Islamic Corporation for the Development of the Private Sector `;
  const titleAr2 = `‏المؤسسة الإسلامية لتنمية القطاع الخاص`;
  const year2 = `August 2021-Present`;
  const yearAr2 = `أغسطس 2021-    حتى ‏‏الوقت الحاضر`
  const designation2 = `Division Head - Equity & Asset Management Legal Affairs`;
  const designationAr2 =`رئيس قسم الشؤون القانونيه لاداره الاسهم والاصول`
  const subtitle2 ="" 
  const subtitleAr2 = ""
  const list = [
    {
      data: `Regularly leads complex M&A and investment fund transactions, involving structuring, drafting and negotiating share purchase and shareholder agreements, prospectuses and all other related documents.`,
    },
    {
      data: `Routinely structures, leads and manages cross-border JV agreements as well as franchise, agency and distribution agreements.`,
    },
    {
      data: `Leads and manages multi-jurisdictional litigation involving complex legal and regulatory issues`,
    },
    {
      data: `Leads and manages the work of a group of Saudi lawyers, ensuring client demands are met.`,
    },
    {
      data: `Advises government, sponsors, and lenders on complex transport, waste, and water projects (Riyadh Bus Project, ISTP Dammam, ISTP Jeddah).`,
    },
    
  ];
  const listAr = [
    
    {
      data: `يقود بانتظام عمليات الاندماج والشراء وصناديق الاستثمار المعقدة ، التي تشمل هيكلة وصياغة والتفاوض بشأن شراء الأسهم واتفاقيات المساهمين ونشرات الإصدار وجميع الوثائق الأخرى ذات الصلة.`,
    },
    {
      data: `يؤسس ويدير بشكل روتيني اتفاقيات المشاريع المشتركة عبر الحدود وكذلك اتفاقيات الامتياز والوكالة والتوزيع.`,
    },
    {
      data: `يدور عمليات التقاضي متعدد الاختصاصات القضائية التي تنطوي على قضايا قانونية وتنظيمية معقدة.`,
    },
    {
      data: `يقود ويدير سراج عمل مجموعة من المحامين السعوديين ، لضمان تلبية طلبات العملاء.`,
    },
    {
      data: `يقدم المشورة للحكومة والجهات الراعية والمقرضين بشأن مشاريع النقل المعقدة والنفايات والمياه (مشروع بصات الرياض، ومشروع معالجة مياه الصرف الصحي المستقل بالدمام وجدة).`,
    },
  ];

  return (
    <>
    <DetailsComponentLeft img={img2} >
      {language === "en" ? (
        <TitleAndList
          title={title2}
          year={year2}
          designation={designation2}
          subtitle={subtitle2}
          // list={list}
        />
      ) : (
        <TitleAndList
          title={titleAr2}
          year={yearAr2}
          designation={designationAr2}
          subtitle={subtitleAr2}
          // list={listAr}
        />
      )}
    </DetailsComponentLeft>
    <DetailsComponentRight img={img}>
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
     {language==="en"? <div className="text-center pt-3">
        <b>*****Awarded Best Lawyer in Saudi Arabia *****</b>
        <br/>
        <b>*****Awarded Best Boutique Law Firm in Saudi Arabia*****</b>
      </div>: <div className="text-center pt-3">
        <b>        ******* حائز سراج على جائزة أفضل محام في المملكة العربية السعودية *******
</b>
        <br/>
        <b>******* حازت شركة ون تو ون للمحاماة على جائزة أفضل مكتب محاماة في المملكة العربية السعودية *******
</b>
      </div>}
    </DetailsComponentRight></>
  );
};

export default Section11;
