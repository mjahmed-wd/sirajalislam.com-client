import React from "react";
import DetailsComponentBottom from "../../SharableComponents/DetailsComponent/DetailsComponentBottom";
import img from "../../../images/webp/image36.webp";
import laptopImg from "../../../images/webp/laptop.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
const Section29 = () => {
  const {language}=useLanguage()
  return (
    <DetailsComponentBottom img={img}>
      <div className="row">
        <div className="col-md-6 col-sm-12">
          <img src={laptopImg} alt="" className="w-100" />
        </div>
        <div className={`${language==="ar"?"arabic text-center":""} col-md-6 col-sm-12`}>
          <CenterCenter>
          <p className="oneFifthRem oneOneRem">
            {language==="en"?`I was asked to provide second opinion legal advice to the King
            Abdulaziz Project for Public Transport in Riyadh city (the
            “Project”), on concession contract drafting.`:`
            طلب من سراج الإسلام تقديم مشورة قانونية كرأي ثان لمشروع الملك عبد العزيز للنقل العام في مدينة الرياض (“المشروع”) ، بشأن صياغة عقد الامتياز. قدم سراج الإسلام خطًا تفصيليًا للتحليل القانوني التفصيلي ومشورة الصياغة، والتي تناولت المسائل القانونية والتجارية والمالية.`}
          </p>
          <p className="oneFifthRem  oneOneRem">
           {language==="en"?` I provided a line by line detailed legal analysis and drafting
            advise, that considered legal, commercial, and financial issues.
            Having been a public procurement lawyer in London and having dealt
            with transport, school, hospital and defense, the challenge was to
            come up with a draft agreement that was significantly shorter that
            what we are used to in the international PPP / PFI market. The
            delivered product was described as “ideal”.`:`سراج الإسلام، والذي كان محاميًا للمشتريات العامة في لندن وتعامل مع وسائل النقل والحقل التعليمي والصحي والدفاع، عنصراً أساسياً في هذه العملية. كان التحدي هو التوصل إلى مسودة اتفاقية تكون أقصر بكثير مما هو معتاد في سوق مبادرة التمويل الخاص  / PFI  والمشاركة بين القطاعين العام والخاص PPP. تم وصف المنتج الذي تم تسليمه بأنه “مثالي”.`}
          </p>
          </CenterCenter>
         
        </div>
      </div>
    </DetailsComponentBottom>
  );
};

export default Section29;
