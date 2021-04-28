import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import Review1 from "../Review/Review1/Review1";
import section41bg from "../../../images/webp/section41bg.webp";
import section3bg from "../../../images/webp/section3bg.webp";

const Section41 = () => {
  const { language } = useLanguage();
  const allReviews = [
    {
      status: "ok",
      en: `text`,
      ar: `arabic`,
      nameEn: `Maura Brindley, Company Secretary at Mercer Limited`,
      nameAr: `مورا بريندلي ، أمينة سر شركة ميرسر ليمتد Mercer Limited`,
    },
    {
      status: "ok",
      en: `Siraj is currently assisting us with a project in Saudi. Until he came on board we
            were experiencing difficulties and delays with the respective authority. Once Siraj
            took control of things, the issues were resolved within a very short time and with the
            results we required. Siraj is a true professional and I would recommend his services
            to others`,
      ar: `aيقدم سراج حاليًا المساعدة لنا في مشروع في السعودية. وقبل انضمامه كنا نواجه صعوبات جمة وتأخير في تعاملاتنا مع السلطات المعنية. غير أنه بمجرد أن تولى سراج الأمور، تم حل المشكلات في وقت قصير جدًا وحصلنا على النتائج المرجوة. إن سيد سراج هو محترف حقيقي وأوصي بخدماته للآخرين `,

      nameEn: `Maura Brindley, Company Secretary at Mercer Limited`,
      nameAr: `مورا بريندلي ، أمينة سر شركة ميرسر ليمتد Mercer Limited`,
    },
    {
      status: "ok",
      en: `Siraj and I started out as attorney and client respectively; however now we are also friends, testament to his ability to build long lasting relationships. Siraj's advice is clear, concise and to the point which is appreciated when dealing with matters on a tight deadline. Highly recommended.`,
      ar: `سراج وأنا بدأنا العمل كمحامي وعميل على التوالي؛ ولكننا الآن أصدقاء أيضًا، وهذا دليل على قدرته على بناء علاقات طويلة الأمد. نصيحة سراج واضحة وموجزة وفي صلب الموضوع، الأمر الذي يتم تقديره عند التعامل مع الأمور المتعلقة بموعد نهائي محدود. أوصي به للغاية.`,
      nameEn: `"	Abdullah Alammari, Director of Administration & Government Relations, Saudi Arabia, Kuwait & Bahrain Geo-Market	"`,
      nameAr: `"	عبد الله العماري، مدير الشؤون الإدارية والعلاقات الحكومية والتسويق الجغرافي بالمملكة العربية السعودية والكويت والبحرين	"`,
    },
    {
      status: "ok",
      en: `A potentially difficult transaction was undertaken with dilligence and efficiency ensuring the whole process was completed smoothly. A recommended partner for the future.`,
      ar: `تم إجراء صفقة يحتمل أن تكون صعبة مع الاجتهاد والكفاءة لضمان اكتمال العملية برمتها بسلاسة. شريك يوصى به للمستقبل.`,
      nameEn: `"	Stephen Openshaw, Director Islamic Products, Eiger Trading Advisors Ltd.	"`,
      nameAr: `"	ستيفن أوبنشو، مدير المنتجات الإسلامية بشركة إيجر تريدينج أدفايزورز المحدودة.	"`,
    },
    {
      status: "ok",
      en: `I had the pleasure to work with Siraj acting as our legal counsel in a complex financial transaction. I am delighted to endorse him, as he is certainly one of the best lawyers I have worked with in my 20+ years career.`,
      ar: `كان من دواعي سروري العمل مع سراج بصفته مستشارنا القانوني في صفقة مالية معقدة. ويسعدني أن أؤيده، لأنه بالتأكيد أحد أفضل المحامين الذين عملت معهم في حياتي المهنية التي تزيد عن 20 عامًا.`,
      nameEn: `"	Federico Tauber, President at Tameer Holding Investment, part of the Al Rajhi Group of Companies	"`,
      nameAr: `"	فيديريكو تاوبر، رئيس شركة تعمير القابضة للاستثمار، وهي جزء من مجموعة شركات الراجحي	"`,
    },
    {
      status: "ok",
      en: `If you need a business partner with fantastic business acumen and genuine enthusiasm, choose Siraj. If you're looking for a spark of creativity and foresight, choose Siraj. If you seek a business partner with experience and confidence, choose Siraj. If you want to work with a genuinely lovely person, choose Siraj. No ifs, no buts. Choose Siraj.`,
      ar: `إذا كنت بحاجة إلى شريك تجاري يتمتع بفطنة عمل رائعة وحماس حقيقي، فاختر سراج. إذا كنت تبحث عن شرارة من الإبداع والبصيرة، فاختر سراج. إذا كنت تبحث عن شريك تجاري يتمتع بالخبرة والثقة، فاختر سراج. إذا كنت تريد العمل مع شخص محبوب حقًا، اختر سراج. بدون احتمالات أو اعتراضات، اختر سراج.`,
      nameEn: `"	Ayman Nabhan, Group Vice President, Finance, AL-ARRAB GROUP OF COMPANIES, part of the Al Rajhi Group of Companies	"`,
      nameAr: `"	أيمن نبهان، نائب رئيس المجموعة، التمويل بمجموعة شركات العراب، إحدى شركات مجموعة شركات الراجحي	"`,
    },
    {
      status: "ok",
      en: `Siraj works well with his clients providing well-thought legal advice and highly professional.`,
      ar: `يعمل سراج بشكل جيد مع عملائه ويقدم استشارات قانونية مدروسة ومهنية للغاية.`,
      nameEn: `"	Edilberto Mendoza, Head of Structured Finance &Syndications, Saudi Hollandi Bank	"`,
      nameAr: `"	إديلبرتو ميندوزا، رئيس التمويل المهيكل والقروض المشتركة بالبنك السعودي الهولندي	"`,
    },
    {
      status: "ok",
      en: `Siraj is a well regarded legal counsel in Shari'ah compliant structures. I've worked with him on a complex project finance transaction. He is very hardworking and his attention to details is incredible.`,
      ar: `سراج مستشار قانوني محترم في الهياكل المتوافقة مع الشريعة الإسلامية. لقد عملت معه في صفقة تمويل مشروع معقدة. إنه يعمل بجد واهتمامه بالتفاصيل لا يصدق.`,
      nameEn: `"	Mansoor Durrani, Vice President & Head of Project Finance at NCB	"`,
      nameAr: `"	منصور دوراني، نائب الرئيس ورئيس قسم تمويل المشاريع بالبنك الأهلي التجاري	"`,
    },
    {
      status: "ok",
      en: `Mr. Siraj Al Islam is an excellent legal advisor, especially in Islamic project finance. I wish him all the success.`,
      ar: `السيد سراج الإسلام مستشار قانوني ممتاز وخاصة في مجال تمويل المشاريع الإسلامية. أتمنى له كل التوفيق".	"`,
      nameEn: `"	Abdulaziz Al Sayari, AVP at Riyad Bank	"`,
      nameAr: `"	عبد العزيز السياري، نائب مساعد ببنك الرياض	"`,
    },
    {
      status: "ok",
      en: `Siraj is serious and reliable Legal Advisor with very high moral standards. He has a profound knowledge of Sharia'a Compliant Finance, well beyond the "ready-made, one-size-fits-all" Islamic solutions. He was instrumental in the closing of a recent deal in Saudi Arabia and I'd be happy to work with him again!`,
      ar: `سراج مستشار قانوني جاد وموثوق ويتمتع بمعايير أخلاقية عالية جدًا. ولديه معرفة عميقة بالتمويل المتوافق مع الشريعة الإسلامية، تتجاوز الحلول الإسلامية "الجاهزة ذات الحجم الواحد المناسب للجميع". لقد كان له دور فعال في إبرام صفقة أخيرة في السعودية وسأكون سعيدًا للعمل معه مرة أخرى!`,
      nameEn: `"	Zied Jalali, Vice President - Project & Structured Finance Arab Banking Corporation	"`,
      nameAr: `"	زيد جلالي، نائب رئيس المشاريع والتمويل المهيكل بالمؤسسة العربية المصرفية	"`,
    },
    {
      status: "ok",
      en: `Siraj is very diligent, energetic and innovative lawyer. Very focused on the issue that he dealt with for ISS UK with strong commercial results for the business. He is an asset to any organisation. Highly recommended.`,
      ar: `سراج محامٍ مجتهد وحيوي ومبتكر. ركز بشدة على القضية التي تعامل معها لصالح شركة أنظمة الخدمة الدولية - المملكة المتحدة مع نتائج تجارية قوية للأعمال. إنه مكسب لأي مؤسسة. أوصى به بشدة.`,
      nameEn: `"	Jang Ahmed FCMA, MBA, Director Mergers & Acquisitions, ISS UK LIMITED, managed Siraj indirectly at ISS UK LIMITED	"`,
      nameAr: `"	جانغ أحمد، زميل بالمعهد القانوني للمحاسبين الإداريين، ماجستير في إدارة الأعمال، مدير عمليات الدمج والاستحواذ بشركة أنظمة الخدمة الدولية - المملكة المتحدة، رأس سراج بشكل غير مباشر في شركة أنظمة الخدمة الدولية المحدودة - المملكة المتحدة	"`,
    },
  ];
  return allReviews.map((review, index) => (
    <Review1
      bgImg={section41bg}
      reviewTextEn={language === "en" ? review.en : review.ar}
      reviewerEn={language === "en" ? review.nameEn : review.nameAr}
    />
  ));
};

export default Section41;
