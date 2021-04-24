import React from "react";
import DetailsComponentRight from "../../SharableComponents/DetailsComponent/DetailsComponentRight";
import img from "../../../images/webp/changed.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section20 = () => {
  const {language}=useLanguage()
  return (
    <DetailsComponentRight img={img}>
     {language==="en"?<> <p >
        The Abraj Al Bait project, in the heart of Makkah and overlooking the Ka
        ’baa the holiest place in Islam and the direction towards which all
        Muslims around the world pray to was my first project and indeed the
        first legal work that I did in the Kingdom of Saudi Arabia.
      </p>
      <p >
        The transaction involved most of the major banks in the GCC, being a
        project that every country in the GCC wanted to get involved with, the
        transaction was religiously very sensitive and accordingly the
        structuring and the terms of the transaction documents went through one
        of the most stringent Shariah due diligence.
      </p>
      <p >
        I took over this project in the middle of the transaction and
        effectively restructured the key provisions and drafting accordingly
        having negotiated with Shariah boards of the various banks. The
        transaction was based on Ijara financing. The current value of the
        project is estimated around US$15 billion. Financial close occurred in
        Jeddah just before morning prayers, I and several of the bankers were
        invited to perform the Umrah to Makkah by the sponsor – this was the
        most amazing start to my career in the Kingdom of Saudi Arabia.{" "}
      </p></>:
      <>
      <p className="arabic oneOneRem">كان مشروع أبراج البيت في قلب مكة ويطل على الكعبة أقدس مكان في الإسلام والاتجاه الذي يصلي نحوه المسلمون في جميع أنحاء العالم هو أول مشروع قانوني ينفذه سراج في المملكة العربية السعودية.</p>
      <p className="arabic oneOneRem">شملت الصفقة معظم البنوك الكبرى في دول مجلس التعاون الخليجي ، كونها مشروعًا أرادت كل دولة في دول مجلس التعاون الخليجي المشاركة فيه ، وكانت المعاملة حساسة دينياً للغاية ، وبناءً على ذلك ، مرت هيكلة وشروط وثائق المعاملات من خلال واحد من أكثر عمليات الفحص النافي للجهالة صرامةً.</p>
      <p className="arabic oneOneRem">لقد توليت هذا المشروع في منتصف الصفقة وأعدت بشكل فعال إعادة صياغة الأحكام الرئيسية وصياغتها بناءً على ذلك ، بعد أن تفاوضت مع الهيئات الشرعية في البنوك المختلفة. وقد استندت الصفقة إلى تمويل الإجارة. تقدر القيمة الحالية للمشروع بحوالي 15 مليار دولار أمريكي. حدث إغلاق مالي في جدة قبل صلاة الفجر، ودعيت أنا والعديد من المصرفيين لأداء العمرة إلى مكة المكرمة من قبل الراعي – كانت هذه البداية الأكثر روعة في حياتي المهنية في المملكة العربية السعودية.</p>
      </>}
    </DetailsComponentRight>
  );
};

export default Section20;
