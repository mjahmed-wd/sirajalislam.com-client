import React from "react";
import img from "../../../images/webp/image15.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
const Section7 = () => {
  const {language,setLanguage}=useLanguage()

  return (
    <DetailsComponentRight img={img}>
      <h6 className={`${language==="en"?"arabic":""} text-center p-3`} style={{fontSize:"20px"}}>{language==="en"?`GENERAL COUNSEL / PARTNER`:`رئيس الشؤون القانونية/ وشريك`}</h6>
          <p className="pb-3 oneOneRem" >
           {language==="en"?` A highly rated award-winning legal advisor and recognised expert in
            Islamic Project Finance and Restructuring offers proven success in
            generating new business, strong legal presence in business
            relations, negotiations, and litigation, and leadership regarding
            risk management/mitigation. Leads project management, due diligence,
            and corporate transactions such as M&As, JVs, and divestitures.
            Experience spans diverse industries and multimillion/billion-dollar
            assignments with international partners. Recognised for innovation
            and legal leadership by clients and leading industry publications.`:`مستشار قانوني حائز على جوائز عليا وخبير معترف به مختص في تمويل المشاريع الإسلامية وإعادة الهيكلة أثبت نجاحًا كبيراً في إنشاء أعمال جديدة ووجود قانوني قوي في العلاقات التجارية والمفاوضات والتقاضي والقيادة فيما يتعلق بإدارة المخاطر / التخفيف. يقود إدارة المشاريع وعمليات الفحص النافي للجهالة والمعاملات المؤسسية مثل عمليات الاندماج والشراء، والمشاريع المشتركة، وعمليات تصفية الاستثمارات. تمتد الخبرة لتشمل صناعات متنوعة ومهام بملايين / مليارات الدولارات مع شركاء دوليين. سراج الإسلام مهني معترف به في مجال الابتكار والقيادة القانونية من قبل العملاء وأدبيات المهنة الرائدة.`}
          </p>
          <b className="text-center d-block p-3">
           {language==="en"?` Business partner with broad experience in M&A activity and organic
            growth that spans multiple industries and markets.`:`شريك عمل يتمتع بخبرة واسعة في مجال أنشطة الاندماج والاستحواذ والنمو الأساسي الذي يشمل العديد من الصناعات والأسواق.`}
          </b>
          <ul className="pt-3 pb-3" style={{ marginLeft: "-15px" }}>
            <li className="pb-2">
             {language==="en"?` As General Counsel governed the legal activities for 70 companies
              and spear- headed the due diligence on the £4 billion acquisition
              and reﬁnance of ISS by Goldman Sachs in the UK.`:"كرئيس الشؤون القانونية، أدار الأنشطة القانونية لعدد 70 شركة وتولى رئاسة العناية الواجبة بشأن الاستحواذ على شركة جولدمان ساكس وإعادة تمويلها بقيمة 4 مليارات جنيه إسترليني في المملكة المتحدة."}
            </li>
            <li className="pb-2">
             {language==="en"?` Advised the Saudi Agriculture and Livestock Investment Company
              (SALIC), a wholly owned subsidiary of the Public Investment Fund
              (PIF) as part of the Kingdom of Saudi Arabia’s strategic food
              security program.`:`تقديم المشورة للشركة السعودية للاستثمار الزراعي و الإنتاج الحيواني (سالك)، وهي شركة تابعة مملوكة بالكامل لصندوق الاستثمارات العامة كجزء من برنامج الأمن الغذائي الاستراتيجي للمملكة العربية السعودية.`}
            </li>
          </ul>
    </DetailsComponentRight>
  );
};

export default Section7;
