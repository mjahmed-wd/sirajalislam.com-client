import React from "react";
// import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/imageTower.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";
const Section13 = () => {
  const { language } = useLanguage();

  const title = `BAKER BOTTS, LLP
  – RIYADH, SAUDI ARABIA`;
  const titleAr = `BAKER BOTTS, LLP  الرياض، المملكة العربية السعودية `;
  const year = `2009-11`;
  const yearAr = `2009-11`;
  const designation = `Associate
  – Global Projects, Islamic Banking & Project Finance`;
  const designationAr = `محام – المشاريع العالمية ، الخدمات المصرفية الإسلامية وتمويل المشاريع في مكتب بيكر بوتس ال ال بي`;
  const subtitle = `As principal lawyer drafted and guided multiple complex transactions, managed other associates and client
  relations.`;
  const subtitleAr = `بصفته محامي رئيس، قام سراج الإسلام بصياغة وقيادة العديد من المعاملات المعقدة ، وإدارة الشركاء الآخرين وعلاقات العملاء.`;
  const list = [
    {
      data: `Structured and corrected erroneous Shariah documents drafted by opposing counsel.`,
    },
    {
      data: `Restructured a major Saudi construction contractor’s financial obligation. `,
    },
    {
      data: ` Managed the restructuring and refinancing of a major petrochemical project in the
      Kingdom of Saudi Arabia, comprising of term loan, refinancing, revolving and standby
      facilities with US Dollars and Riyal tranches.
      `,
    },
    {
      data: ` Led restructuring and refinancing related to a petrochemical company’s project costs
      overrun requirements.
      `,
    },
    {
      data: `Reviewed finance/project documents and legal opinions related to SEC’s Riyadh PP11
      independent power project. `,
    },
    {
      data: `Oversaw structuring and drafting BOT/BOO based full encompassing project documents
      for demilitarisation facility `,
    },
    {
      data: `Structured a major company’s mobile personalisation services to the Kingdom of Saudi
      Arabia. `,
    },
  ];

  const listAr = [
    { data: `هيكلة وتصحيح وثائق شرعية أعدها المستشار القانوني للطرف الآخر.` },
    { data: `إعادة هيكلة الالتزام المالي لمقاول بناء سعودي رئيس.` },
    {
      data: `إدارة إعادة الهيكلة وإعادة التمويل لمشروع البتروكيماويات الرئيسي في المملكة العربية السعودية ، بما في ذلك القروض لأجل، وإعادة التمويل، وتدوير التسهيلات والتسهيلات الاحتياطية بالدولار الأمريكي والريال السعودي.`,
    },
    {
      data: `قيادة إعادة الهيكلة وإعادة التمويل المتعلقة بتجاوز تكاليف مشروع شركة بتروكيماويات`,
    },
    {
      data: `مراجعة وثائق التمويل / المشروع والآراء القانونية المتعلقة بمشروع الطاقة المستقل لـ PP11 في الرياض.`,
    },
    {
      data: `الإشراف على هيكلة وصياغة كامل وثائق مشروع منشأة نزع السلام وفق نظام البناء والتملك والتشغيل BOO/ ونظام البناء والتملك ونقل الملكيةBOT`,
    },
    {
      data: `هيكلة خدمات تخصيص الهاتف المحمول لشركة كبرى في المملكة العربية السعودية.`,
    },
  ];
  return (
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
    </DetailsComponentRight>
  );
};

export default Section13;
