import React from 'react';
import { useLanguage } from '../../LanguageProvider/LanguageProvider';
import Review1 from '../Review/Review1/Review1'
import section35bg from "../../../images/webp/image44.webp"

const Section35 = () => {
  const {language}=useLanguage()
    return (
        <Review1 bgImg={section35bg}
        reviewTextEn={language==="en"?`I have worked as Mercer Saudi Arabia CEO with Siraj since 2010. Apart from
        his deep knowledge of the law, what is really important from a management point
        of view is, his proactive approach and focus to achieve results in a very short time.
        With Siraj’s support I must say from a CEO perspective that we will not face any
        last minute surprises. He always makes sure that we have timely, alternative
        solutions when required.`:`لقد عملت كرئيس تنفيذي لشركة ميرسر السعودية Mercer Saudi Arabia  وتعاملت مع سراج منذ عام 2010. وبصرف النظر عن معرفته العميقة بالقانون ، فإن ما هو مهم حقًا من وجهة نظر الإدارة هو نهجه الاستباقي والتركيز على تحقيق النتائج في وقت قصير جدًا.
        بدعم من سراج ، يجب أن أقول، من منظور المدير التنفيذي، أننا لن نواجه أي مفاجآت في اللحظة الأخيرة. يتأكد دائمًا من أنه لدينا حلول بديلة في الوقت المناسب عند الحاجة.
        
        `}
        reviewerEn={language==="en"?`Paulo Machado, CEO, Mercer Saudi Arabia`:`باولو ماتشادو ، الرئيس التنفيذي لشركة Mercer Saudi Arabia
        `}
      />
    );
};

export default Section35;