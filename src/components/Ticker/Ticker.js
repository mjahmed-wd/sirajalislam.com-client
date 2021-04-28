import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { useLanguage } from "../LanguageProvider/LanguageProvider";

const Ticker = () => {
  const { language } = useLanguage();
  const testimonials = [
    { english: "	“…Highly recommended…”	", arabic: "	'... يُوصَّى به بشدة…' " },
    { english: "	“…proactive approach…”	", arabic: "	'... نهج استباقي …'	" },
    {
      english: "	“….achieve results in a very short time…”	",
      arabic: "	'... تحقق النتائج في وقت قصير جدًا …'	",
    },
    {
      english: "	“….we will not face any last minute surprise….”	",
      arabic: "	'... لن نواجه أي مفاجأة في اللحظة الأخيرة .…'	",
    },
    {
      english:
        "	“….always makes sure that we have in time alternative solutions….”	",
      arabic: "	'... نتأكد دائمًا من أن لدينا حلولًا بديلة في الوقت المناسب …'	",
    },
    {
      english:
        "	“…..advice is clear, concise and to the point which is appreciated when dealing with matters on a tight deadline….”	",
      arabic:
        "	'... توصية واضحة وموجزة إلى النقطة التي تحظى بالتقدير عند تناول المسائل في موعد زمني ضيق …'	",
    },
    {
      english:
        "	“….took control of things, the issues were resolved within a very short time and with the results we required…”	",
      arabic:
        "	'.... السيطرة على الأمور، بحيث يتم حل المشكلات في غضون وقت قصير جدًا وبالنتائج التي طلبناها ... ' ",
    },
    {
      english:
        "	“….true professional and I would recommend his services to others….”	",
      arabic: "	'... محترف حقيقي وأود أن أوصي بخدماته للآخرين .…'	",
    },
    {
      english:
        "	“….difficult transaction was undertaken with diligence and efficiency ensuring the whole process was completed smoothly…..”	",
      arabic:
        "	'... أجريت المعاملات الصعبة بجدية وكفاءة لضمان انجاز العملية برمتها بسلاسة …'	",
    },
    {
      english:
        "	“…..certainly one of the best lawyers I have worked with in my 20+ years career….”	",
      arabic:
        "	'...بالتأكيد واحد من أفضل المحامين الذين عملت معهم في حياتي المهنية لمدة 20 عامًا...	",
    },
    {
      english: "	“…fantastic business acumen and genuine enthusiasm…”	",
      arabic: "	'...فطنة عملية رائعة وحماس حقيقي …'	",
    },
    {
      english: "	“….creativity and foresight…”	",
      arabic: "	'.... إبداع وبصيرة …'	",
    },
    { english: "	“…experience and confidence…”	", arabic: "	'... خبرة وثقة …'	" },
    { english: "	“…genuinely lovely person…”	", arabic: "	'... شخص جميل حقًا …'	" },
    {
      english: "	“…well-thought legal advice and is highly professional…”	",
      arabic: "	'... توصية قانونية مدروسة جيدًا ومهنية للغاية …'	",
    },
    {
      english:
        "	“…well-regarded legal counsel in Shari’ah compliant structures…”	",
      arabic:
        "	'... مستشار قانوني مرموق في الهياكل المتوافقة مع الشريعة الإسلامية …'	",
    },
    {
      english: "	“…hard working and his attention to detail is incredible…”	",
      arabic: "	'... العمل الدؤوب واهتمامه بالتفاصيل أمر لا يصدق …'	",
    },
    {
      english: "	“…an excellent legal advisor…”	",
      arabic: "	'... مستشار قانوني ممتاز …'	",
    },
    { english: "	“…serious and reliable…”	", arabic: "	'... جاد ويُعتمد عليه …'	" },
    {
      english: "	“…very high moral standards…”	",
      arabic: "	'... معايير أخلاقية عالية للغاية …'	",
    },
    {
      english: "	“…profound knowledge of Sharia’a Compliant Finance…”	",
      arabic: "	'... معرفة عميقة بالتمويل المتوافق مع الشريعة الإسلامية …'	",
    },
    {
      english: "	“…dedication and persistence…”	",
      arabic: "	'... تفاني ومثابرة …'	",
    },
    {
      english: "	“…particularly effective negotiator…”	",
      arabic: "	'... مفاوض فعال بشكل خاص …'	",
    },
    {
      english: "	“…great strategic grasp…”	",
      arabic: "	'... فهم استراتيجي عظيم …'	",
    },
    { english: "	“…significant presence…”	", arabic: "	'... حضور ملحوظ …'	" },
    {
      english: "	“…tirelessly working to deliver as much as was possible…”	",
      arabic: "	'... عمل بلا كلل لتقديم أكبر قدر ممكن …'	",
    },
    {
      english: "	“…very diligent, energetic and innovative….”	",
      arabic: "	'... مجتهد وحيوي ومبتكر …'	",
    },
    {
      english:
        "	“….very focused on the issue in hand with strong commercial results for the business….”	",
      arabic:
        "	'... التركيز الشديد على المسألة المصحوبة بنتائج تجارية قوية للأعمال التجارية…'	",
    },
    {
      english: "	“…an asset to any organization….”	",
      arabic: "	'... أصل لأية مؤسسة .…'	",
    },
    { english: "	“…highly recommended…”	", arabic: "	'... يُوصَّى به بشدة…' " },
  ];
  return (
   <div className=" ticker bg-white pt-4 pb-3 text-dark w-100 shadow-lg mb-5 bg-white rounded" >
     <div className="container">
     <Carousel fade className="text-center">
      {testimonials.map((quote, index) => (
        <Carousel.Item key={index} interval={2000}>
          <b>{language === "en" ? quote.english : quote.arabic}</b>
        </Carousel.Item>
      ))}
    </Carousel>
     </div>
   </div>
  );
};

export default Ticker;
