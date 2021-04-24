import React from "react";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import img from "../../../images/webp/image31.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section24 = () => {
  const {language}=useLanguage()
  return (
    <DetailsComponentRight img={img}>
      {language==="en"?<><ul>
        <li>
        Advising the lenders on the Jeddah ISTP for the up to 500,000 m3 per
          day independent sewage treatment plant.
        </li>
        <li>
          Advised the lenders on the Dammam ISTP for the up to 350,000 m3 per
          day independent sewage treatment plant.
        </li>
        <li>
          Advised on Islamic Finance documents in connection with a US$10
          billion Ijara based Islamic Finance of a downstream petrochemical
          complex.
        </li>
        <li>
          Acts for majority of ECA financing originating from Germany to Saudi
          Arabia.
        </li>
        <li>
          Advised on re-structuring and correcting erroneous Shariah
          documentations drafted by opposing counsel, requiring a complete
          overhaul and re -drafting for a facility in excess of SR1.2 billion.{" "}
        </li>
        <li>
          Advised on revolving and term loan with a letter of credit facility of
          US$135 million.{" "}
        </li>
        <li>
          Advised on Ijara based Islamic Finance document in connection with a
          major development project in the holy city of Makkah valued at US$750
          million.
        </li>
        <li>
          {" "}
          Advised on a US$326 million multicurrency project cost overrun funding
          facilities structured as an Islamic commodity -backed Murabaha.
        </li>
        <li>
          Advised on multi -jurisdictional term loan facility of US$325 million.
        </li>
      </ul></>:<>
      <ul>
        <li>تقديم المشورة للمقرضين في مشروع محطة جده المستقلة لمعالجة مياه الصرف الصحي ISTP التي تبلغ سعتها 500،000 متر مكعب في اليوم .</li>
        <li>تقديم المشورة للمقرضين في مشروع محطة الدمام المستقلة لمعالجة مياه الصرف الصحي ISTP بالدمام لما يصل إلى 350،000 متر مكعب في اليوم.</li>
        <li>تقديم المشورة بشأن وثائق التمويل الإسلامي فيما يتعلق بتمويل إجارة إسلامي قائم على 10 مليارات دولار أمريكي لمجمع بتروكيماويات في المرحلة النهائية.</li>
        <li>القيام بمعظم أعمال التمويل الخاصة باللجنة الاقتصادية لأفريقيا التي نشأت في ألمانيا في المملكة العربية السعودية.</li>
        <li>تقديم المشورة بشأن إعادة هيكلة وتصحيح وثائق شرعية خاطئة تمت صياغتها من قبل محامي الطرف المقابل والتي تتطلب إجراء إصلاح شامل وإعادة صياغة لمنشأة تزيد قيمتها عن 1.2 مليار ريال سعودي.</li>
        <li>تقديم المشورة بشأن إعادة تدوير قرض وقرض لأجل بخطاب إئتماني بقيمة 135 مليون دولار أمريكي.</li>
        <li>تقديم المشورة بشأن وثيقة التمويل الإسلامي القائمة على الإجارة فيما يتعلق بمشروع تطوير كبير في مدينة مكة المكرمة بقيمة 750 مليون دولار أمريكي.</li>
        <li>تقديم المشورة بشأن مشروع متعدد العملات بمبلغ 326 مليون دولار أمريكي تجاوز تكاليف التمويل المبنية على شكل مرابحة إسلامية مدعومة بالسلع.</li>
      </ul>
      </>}
    </DetailsComponentRight>
  );
};

export default Section24;
