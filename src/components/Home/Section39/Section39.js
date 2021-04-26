import React from "react";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/section39.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section39 = () => {
  const {language}=useLanguage()
  return (
    <DetailsComponentLeft img={img}>
      {language==="en"?<><ul>
        <li>
          Led the sale of an F&B business to a major Saudi holding company.
        </li>
        <li>Advised on sale of a Saudi Arabian company to a Bahraini bank. </li>
        <li>
          {" "}
          Led the sale of a Saudi Arabian contracting company to a Qatari
          controlled investment vehicle.
        </li>
        <li>
          Led due diligence on the £4B acquisition and refinance of ISS by
          Goldman Sachs in the UK; reviewed and presented to the board of
          directors all finance documents
        </li>
        <li>
          Advised on and drafted an amendment agreement for waste water services
          in the central region of Saudi Arabia.
        </li>
        <li>
          {" "}
          Facilitated sales of companies for consideration value of €40M and
          €29M while also completing several business sales and due diligence on
          multiple acquisitions
        </li>
        <li>
          Setup and launched more than 20 companies across diverse industry
          segments.
        </li>
      </ul></>:<>
      <ul>
        <li>
إدارة الأنشطة القانونية لـ 70 شركة فيما يتعلق بإدارة الشركات والتخفيف من المخاطر والامتثال التنظيمي.</li>
        <li>تقديم المشورة العامة بشأن مسائل الإعسار بمختلف أنواعه والمشورة بشأن مسؤولية المديرين ومكافآتهم، وعمليات تصفية الشركات.</li>
        <li>تقديم المشورة بشأن قضايا الأسهم مثل: زيادة رأس المال، وتقليل رأس المال، والانقسام والاندماج، وإعادة توزيع الأسهم.
</li>
        <li>نقل الخبرة حول سلطات المديرين والمساهمين، وتوضيح القوة الفردية للمديرين وبيان وظائف الأعمال التي يجب الوفاء بها على مستوى المجلس ومستوى المساهمين.</li>
        <li>تعد عمليات ون تو ون تغييرًا في السياسة على مستوى المجموعة بشأن متطلبات الفحص النافي للجهالة.</li>
        <li>تقديم المشورة للبنك السعودي الفرنسي (بصفته مستشارًا ماليًا) بشأن الاكتتاب العام الأولي لـ 40 في المائة من رأس مال شركة إم تي سي (زين) السعودية (مشغل الجيل الثالث).</li>
        <li>تقديم المشورة إلى شركة الصحراء للبتروكيماويات بشأن حقوقها الثانوية وعرض أسهمها المجانية، وما يتعلق بمسائل الامتثال المختلفة ومتطلبات الإفصاح المستمرة.</li>
        <li>تقديم المشورة إلى شركة أبناء عبد الله الخضري بشأن عرض 30٪ من رأسمالها للجمهور من خلال طرح عام أولي.</li>
        <li>تقديم المشورة إلى شركة بي سي سي دبليو PCCW فيما يتعلق بالاكتتاب العام الأولي في سوق الأسهم السعودية، خاصة فيما يتعلق بالمسؤولية المتعلقة بنشرة الاكتتاب العام.</li>
      </ul>
      </>}
    </DetailsComponentLeft>
  );
};

export default Section39;
