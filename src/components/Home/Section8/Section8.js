import React from "react";
// import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/image16.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
const Section8 = () => {
  const { language } = useLanguage();

  return (
    <DetailsComponentLeft img={img}>
      <b className="text-center d-block p-3">
        {language === "en"
          ? `Award winning lawyer recognised as one of the only Saudi resident
            legal experts in the transport and wastewater PPP projects.`
          : `محامٍ حائز على العديد من الجوائز ومعترف به كواحد من الخبراء القانونيين المقيمين السعوديين الوحيدين في مشاريع الشراكة بين القطاعين العام والخاص في مجال النقل والمياه العادمة.`}
      </b>

      <ul className="pt-3 pb-3" style={{ marginLeft: "-15px" }}>
        <li className="pb-2">
          {language === "en"
            ? `Provide consultative advising services to government, sponsors,
              and lenders on complex transport, waste, and water projects,
              including the Riyadh Bus Project, Independent Sewage Treatment
              Plants Dammam and Jeddah.`
            : `تقديم خدمات استشارية للحكومة والجهات الراعية والمقرضين بشأن مشاريع النقل والنفايات والمياه المعقدة ، بما في ذلك مشروع حافلات الرياض ومحطات معالجة مياه الصرف الصحي المستقلة بالدمام و جدة.`}
        </li>
        <li className="pb-2">
          {language === "en"
            ? `Regularly advised on transport projects in the United Kingdom’s
              London Underground and Merseyside Waste Disposal Authority, one of
              the UK’s largest PFI projects in the waste sector.`
            : `تقديم المشورة بانتظام بشأن مشاريع النقل في هيئة التخلص من النفايات في مترو أنفاق لندن وميرسيسايد في المملكة المتحدة ، وهي واحدة من أكبر مشاريع مبادرة التمويل الخاص في المملكة المتحدة في قطاع النفايات.`}
        </li>
      </ul>
      <b className="text-center d-block p-3">
        {language === "en"
          ? `Noted expert in Islamic banking and real estate with signiﬁcant
            experience in international business and risk management.`
          : `خبير مرموق في مجال المصرفية الإسلامية والعقارات ويحظى بخبرة هائلة في مجال الأعمال الدولية وإدارة المخاطر.`}
      </b>

      <ul className="pt-3 pb-3" style={{ marginLeft: "-15px" }}>
        <li className="pb-2">
          {language === "en"
            ? `Advised, drafted and negotiated as sole counsel, a complete set of
              42 Islamic ﬁnance transaction documents for the Government of
              Saudi Arabia.`
            : ` تقديم المشورة كمستشار وحيد لمجموعة كاملة من 42 وثيقة معاملة تمويل إسلامي وصياغتها والتفاوض بشأنها لصالح حكومة المملكة العربية السعودية.`}
        </li>
        <li className="pb-2">
          {language === "en"
            ? `Prepared Islamic ﬁnance documents for a $10 billion, Ijara-based
              Islamic ﬁnance of a downstream petrochemical complex, as well as
              Ijara-based, Islamic ﬁnance documents related to a $750 million
              development project in Makkah.`
            : `إعداد وثائق التمويل الإسلامي لمشروع إجارة إسلامي بقيمة 10 مليارات دولار لمجمع بتروكيماويات، بالإضافة إلى وثائق تمويل إسلامية متعلقة بمشروع تطوير بمكة المكرمة بقيمة 750 مليون دولار.`}
        </li>
      </ul>
    </DetailsComponentLeft>
  );
};

export default Section8;
