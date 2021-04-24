import React from 'react';
import { useLanguage } from '../../LanguageProvider/LanguageProvider';
import Review1 from '../Review/Review1/Review1'

const Section41 = () => {
    const {language}=useLanguage()
    return (
        <Review1
        reviewTextEn={language==="en"?`Siraj is currently assisting us with a project in Saudi. Until he came on board we
            were experiencing difficulties and delays with the respective authority. Once Siraj
            took control of things, the issues were resolved within a very short time and with the
            results we required. Siraj is a true professional and I would recommend his services
            to others`:"يقدم سراج حاليًا المساعدة لنا في مشروع في السعودية. وقبل انضمامه كنا نواجه صعوبات جمة وتأخير في تعاملاتنا مع السلطات المعنية. غير أنه بمجرد أن تولى سراج الأمور، تم حل المشكلات في وقت قصير جدًا وحصلنا على النتائج المرجوة. إن سيد سراج هو محترف حقيقي وأوصي بخدماته للآخرين "}
        reviewerEn={`Maura Brindley, Company Secretary at Mercer Limited`}
      />
    );
};

export default Section41;