import React from "react";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import img from "../../../images/webp/image33.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section26 = () => {
        const {language}=useLanguage()
  return (
    <DetailsComponentRight img={img}>
      {language==="en"?<><ul>
        <li>Advised a banking syndicate in the negotiation of SR360 million
facility for the construction of health centres. </li>
        <li>Advising a consortium on the Qurayyah Independent Power Project 1
for the building of a facility to provide electricity generation of
approximately 1800MW.
</li>
        <li>Advised on the Rabigh Independent Power Project for the building of
the approximately 1,200 MW power plant.</li>
        <li>Advised on the Riyadh Independent Power Project P11 for the
development of the approximately 1,729 MW power generation
capacity</li>
        <li>Advised on the re
-structuring and refinancing of a major
petrochemical company in the Kingdom of Saudi Arabia</li>
        <li>Advised on the project cost overrun financing relating to a
petrochemical company. </li>
        <li>Advised on the re
-structuring of a major Saudi construction
contractor. </li>
        <li>Advised on and drafted standardized Islamic finance documents for
corporate borrower which are now used as standard precedents. </li>
      </ul></>:<>
      <ul>
              <li>تقديم المشورة لكونسورتيوم مصرفي بشأن التفاوض حول تسهيلات بمبلغ بقيمة 360 مليون ريال لبناء مراكز صحية.</li>
              <li>تقديم المشورة لكونسورتيوم حول مشروع القريا للطاقة المستقلة 1 لبناء محطة توليد كهرباء تبلغ سعتها حوالي 1800 ميجا وات.</li>
              <li>تم تقديم المشورة بشأن مشروع رابغ للطاقة المستقلة لبناء محطة توليد كهرباء بسعة 1200 ميجا وات تقريبًا.</li>
              <li>تقديم المشورة بشأن مشروع الرياض المستقل للطاقةP11 لتطوير سعة توليد الطاقة التي تصل إلى 1،729 ميجا وات تقريبًا.</li>
              <li>تقديم المشورة بشأن إعادة هيكلة وإعادة تمويل إحدى شركات البتروكيماويات الكبرى في المملكة العربية السعودية.</li>
              <li>تقديم المشورة بشأن تمويل تجاوز تكاليف المشروع المتعلقة بشركة بتروكيماويات.</li>
              <li>تقديم المشورة بشأن إعادة هيكلة شركة مقاولات ومباني كبرى بالمملكة.
</li>
              <li>تقديم المشورة وصياغة وثائق تمويل اسلامي نموذجية لشركة مقترضة والتي تستخدم الآن كنماذج.</li>
      </ul>
      </>}
    </DetailsComponentRight>
  );
};

export default Section26;
