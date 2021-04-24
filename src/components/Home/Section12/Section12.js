import React from "react";
// import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/section12.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";
const Section12 = () => {
  const { language, setLanguage } = useLanguage();

  const title = `DEWEY & LEBOEUF, LLP (SQUIRE PATTON BOGGS) – RIYADH, 
    SAUDI ARABIA`;
  const titleAr = `شركة ديوي آند ليبوف (سكوير باتون بوقس)، المملكة العربية السعودية`;
  const year = `2011-13`;
  const yearAr = `2011-13`;
  const designation = `Senior Associate – Islamic Banking & Project Finance
    `;
  const designationAr = `محام أول – المصرفية الإسلامية وتمويل المشاريع
    `;
  const subtitle = `Recruited on a fast track partnership and served as firm’s global expert on Islamic banking and finance transaction.  Served as principal strategic legal advisor for one of the world’s largest business/risk consultancy organisations.
    `;
  const subtitleAr = `تم توظيفه توطئة لإحلاله كشريك وعمل كخبير عالمي للشركة في المعاملات المصرفية والتمويل الإسلامي. عمل مستشارًا

    قانونيًا استراتيجيًا أساسياً لإحدى أكبر المنظمات الاستشارية في مجال  المخاطر التجارية في العالم.
    
     تولى جميع المسائل المتعلقة بالتمويل الإسلامي في الشركة مع تخصيص 90 ٪ من الوقت الذي يقضيه في تطوير العملاء الشخصيين في مقابل عملاء الشركة الحاليين.`;
  const list = [
    {
      data: `Handled all Islamic finance matters for the firm with 90% of billable time spent on developing personal clients as opposed to existing firm clientele.
        `,
    },
    {
      data: `Advised on strategic risk and legal structuring for a new energy holding management company being established to penetrate and dominate the renewable energy sector.
        `,
    },
    {
      data: `Guided a MENA-centric investment bank on a Shariah compliant purchase of an offshore oil rig.
        `,
    },
    {
      data: `Advised a consortium of the Qurayyah Independent Power Project 1 on building a facility to generate approximately 1800 MW of electricity.
        `,
    },
    {
      data: `Counselled a consortium on Al Kharj and Sudair concession contract for construction, management, operation, and maintenance of potable water, industrial, irrigation, sanitary, and industrial water drainage facilities.
        `,
    },
    {
      data: `Created documents for a novel Murabaha facility provided to a trading company by its founding shareholders.
        `,
    },
    {
      data: `Consulted an investor on bank and finance documents in relations to the acquisition of a hospital group`,
    },
    {
      data: `Delivered sound counsel to a leading automotive distributor in regard to existing financial obligations`,
    },
    {
      data: `Advised on and drafted an amendment agreement for wastewater services in the central region of Saudi Arabia.
        `,
    },
    {
      data: `Counselled one of the largest Saudi conglomerates on strategic corporate and financial matters.
        `,
    },
    {
      data: `Drafted Shariah compliance documentation for a real estate fund.
        `,
    },
  ];
  const listAr = [
    { data: `تقديم المشورة بشأن المخاطر الاستراتيجية والهيكلة القانونية لشركة إدارة الطاقة القابضة الجديدة التي يتم إنشاؤها لاختراق والهيمنة على قطاع الطاقة المتجددة.` },
    { data: `قاد تقديم المشورة لبنك استثماري في منطقة الشرق الأوسط وشمال إفريقيا حول عملية شراء متوافقة مع أحكام الشريعة لمنصة نفط بحرية.` },
    { data: `تقديم المشورة لكونسورتيوم مشروع قورية للطاقة المستقلة 1 حول بناء منشأة لتوليد ما يقرب من 1800 ميجا وات من الكهرباء.` },
    { data: `تقديم الاستشارات القانونية لمجموعة شركات بشأن عقد امتياز الخرج وسدير لبناء وإدارة وتشغيل وصيانة مرافق مياه الشرب والصرف الصحي والري والصرف الصحي والصناعي.` },
    { data: `صياغة مستندات لمنشأة مرابحة جديدة تقدمها شركة تجارية من قبل المساهمين المؤسسين لها.` },
    { data: `تقديم المشورة لمستثمر حول مستندات بنك وتمويل فيما يتعلق باقتناء مجموعة مستشفيات.` },
    { data: `تم تقديم استشارات فاعلة لموزع سيارات رائد فيما يتعلق بالالتزامات المالية الحالية.` },
    { data: `تقديم المشورة وصياغة اتفاقية تعديل خدمات الصرف الصحي في المنطقة الوسطى من المملكة العربية السعودية.` },
    { data: `تقديم الاستشارات القانونية لأحد أكبر التكتلات السعودية في الشؤون الاستراتيجية والمالية للشركات.` },
    { data: `صياغة وثائق الامتثال للشريعة لصندوق عقاري.` },
  ];
  return (
    <DetailsComponentLeft img={img}>
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
    </DetailsComponentLeft>
  );
};

export default Section12;
