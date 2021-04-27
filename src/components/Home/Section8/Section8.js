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
            ? <>Provide consultative advising services to government, sponsors,
              and lenders on <b>complex transport, waste, and water projects,
              including the Riyadh Bus Project, Independent Sewage Treatment
              Plants Dammam and Jeddah.</b></>
            : `تقديم خدمات استشارية للحكومة والجهات الراعية والمقرضين بشأن مشاريع النقل والنفايات والمياه المعقدة ، بما في ذلك مشروع حافلات الرياض ومحطات معالجة مياه الصرف الصحي المستقلة بالدمام و جدة.`}
        </li>
        <li className="pb-2">
          {language === "en"
            ? <>Regularly advised on <b>transport projects{" "}</b> in the <b>United Kingdom’s
            London Underground{" "}</b> and <b>Merseyside Waste Disposal Authority{" "}</b>, one of
              the <b>UK’s largest PFI{" "} </b> projects in the waste sector.</>
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
            ? <>Advised, drafted and negotiated as sole counsel, a complete set of
              <b>42 Islamic ﬁnance{" "} </b> transaction documents for the <b>Government of
              Saudi Arabia</b>.</>
            : <> تقديم المشورة كمستشار وحيد <b>لمجموعة كاملة من {" "}42{" "}</b> وثيقة معاملة تمويل إسلامي وصياغتها والتفاوض بشأنها لصالح حكومة المملكة العربية السعودية.</>}
        </li>
        <li className="pb-2">
          {language === "en"
            ? <>Prepared Islamic ﬁnance documents for a <b>$10 billion</b>, Ijara-based
              Islamic ﬁnance of a downstream petrochemical complex, as well as
              Ijara-based, Islamic ﬁnance documents related to a <b>$750 million{" "}</b>
              development project in Makkah.</>
            : <>إعداد وثائق التمويل الإسلامي لمشروع إجارة إسلامي بقيمة <b> {" "} 10 مليارات {" "} </b> دولار لمجمع بتروكيماويات، بالإضافة إلى وثائق تمويل إسلامية متعلقة بمشروع تطوير بمكة المكرمة بقيمة  750 مليون دولار.</>}
        </li>
      </ul>
    </DetailsComponentLeft>
  );
};

export default Section8;
