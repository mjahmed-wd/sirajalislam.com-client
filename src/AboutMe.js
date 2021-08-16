import React, { Suspense } from "react";
import { useLanguage } from "./components/LanguageProvider/LanguageProvider";
import aboutMeEn from "./images/webp/circles/aboutMeEn.png";
import aboutMeAr from "./images/webp/circles/aboutMeAr.png";
import generalCounselEn from "./images/webp/circles/generalCounselEn.png";
import generalCounselAr from "./images/webp/circles/generalCounselAr.png";
import section3bg from "./images/webp/section3bg.webp";
import section4bg from "./images/webp/section4bg.webp";
import section9bg from "./images/webp/section9bg.webp";
// import MainCircle from './components/SharableComponents/MainCicle/MainCircle';

const AboutMe = () => {
  const Review1 = React.lazy(() =>
    import("./components/Home/Review/Review1/Review1")
  );
  const Review2 = React.lazy(() =>
    import("./components/Home/Review/Review2/Review2")
  );
  const Section5 = React.lazy(() =>
    import("./components/Home/Section5/Section5")
  );
  const Section7 = React.lazy(() =>
    import("./components/Home/Section7/Section7")
  );
  const Section8 = React.lazy(() =>
    import("./components/Home/Section8/Section8")
  );
  const MainCircle = React.lazy(() =>
    import("./components/SharableComponents/MainCicle/MainCircle")
  );

  const { language } = useLanguage();

  return (
    <div id="about">
      {/* <Header /> */}
      {/* SECTION 2-9 */}
      <Suspense fallback={<div>Loading...</div>}>
        <MainCircle img={language === "en" ? aboutMeEn : aboutMeAr} />
      </Suspense>
     
      <Suspense fallback={<div>Loading...</div>}>
        <Review1
          bgImg={section3bg}
          reviewTextEn={
            language === "en"
              ? ` I took over from Siraj but shadowed him for a few months before he
            left. Something I noticed was Siraj's dedication and persistence.
            Both qualities make Siraj a particularly effective negotiator. He
            has a great strategic grasp on a situation which is combined with a
            significant presence. Similar comments have been made by the
            internal clients, whom he served, for a number of years. Whilst at
            ISS UK, Siraj set up a number of detailed and effective systems. The
            basis of these systems are still used today across a number of areas
            (finance; risk; competition; and data protection). Siraj built the
            role of General Counsel at ISS UK and he couldn't have achieved this
            without stepping up and really understanding what was required and
            then tirelessly working to deliver as much as was possible. I'm
            grateful for his hard work.`
              : `حين تسلمت المسؤولية من سراج ظللت أتتبعه وأتعرف على أساليب أدائه بضعة أشهر قبل أن يغادر. يتحلى سراج بصفات هامة ألا وهي الإخلاص في العمل والإصرار على الإنجاز وهي صفات تجعل سراج مفاوضاً فعالاً بشكل خاص. لديه فهم استراتيجي كبير للموضوعات يقترن بحضور مميز. وقد كان ذلك هو رأي العملاء الذين خدمهم لعدد من السنوات. أثناء وجوده في ISS UK ، قام سراج بإعداد عدد من الأنظمة التفصيلية والفعالة. لا يزال أساس هذه الأنظمة مستخدمًا حتى اليوم في عدد من المجالات (المالية والمخاطر والمنافسة وحماية البيانات). بنى سراج دور المستشار العام في ISS UK ولم يكن بإمكانه تحقيق ذلك دون أن يتقدم ويفهم حقًا ما هو مطلوب ومن ثم يعمل بلا كلل لتقديم أكبر قدر ممكن. أنا ممتن لعمله الشاق.

            `
          }
          reviewerEn={
            language === "en"
              ? `Richard Reade, General Counsel at Coats Group Plc`
              : `ريتشارد ريد ، المستشار العام شركة كوتس جروب Coats Group Plc`
          }
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Review2 bgImg={section4bg} />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Section5 />
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <TextImg />
        </Suspense> */}
      <Suspense fallback={<div>Loading...</div>}>
        <MainCircle
          img={language === "en" ? generalCounselEn : generalCounselAr}
        />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Section7 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Section8 />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
        <Review1
          bgImg={section9bg}
          reviewTextEn={
            language === "en"
              ? `I have been involved in several transactions where Siraj was advising the other side, and each time I have welcomed his courtesy and professionalism and his willingness to give due consideration to any comments and propose practical solutions for ensuring that the transaction proceeded smoothly to a successful conclusion.
          `
              : ` لقد شاركت في العديد من المعاملات حيث كان سراج يقدم المشورة للجانب الآخر ، وفي كل مرة كنت استمتع بلطفه ومهنيته واستعداده للاستماع والاهتمام بأي تعليقات واقتراح حلول عملية لضمان سير الصفقة بسلاسة والوصول إلى نتيجة مرضية.`
          }
          reviewerEn={
            language === "en"
              ? `Richard Beresford, Legal Counsel, Eiger Trading Advisors Limited
          `
              : `المستشار القانوني لشركة إيجر للاستشارات التجارية Eiger Trading Advisors Limited`
          }
        />
      </Suspense>
    </div>
  );
};

export default AboutMe;
