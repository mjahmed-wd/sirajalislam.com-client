import React from "react";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/image29.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section22 = () => {
  const {language}=useLanguage()
  return (
    <DetailsComponentLeft img={img}>
     {language==="en"? <><p >
        The project was in the middle of construction and had a cost overrun.
      </p>
      <p >
        I restructured the original financing, as well as drafting the new
        Shariah compliant financing document, the documents on the original
        financing were drafted by the borrowers counsel, and accordingly the
        lenders thought that I should draft all the new addendum documents for
        the transaction going forward due to the fact that it was no longer a
        straight forward transaction but effectively a restructure of the whole
        financing.
      </p>
      <p >
        Managing a group of Saudi Arabian lenders and an international bank was
        complicated as expected, as each bank had differing views on the risks
        involved with the project that had effectively entered into significant
        difficulties to complete.
      </p></>:<>
      <p className="arabic oneOneRem">كان المشروع في منتصف البناء وقد تجاوز التكلفة المقدرة.</p>
      <p className="arabic oneOneRem">قام سراج الإسلام بإعادة هيكلة التمويل الأصلي، وكذلك صياغة وثيقة تمويل جديدة متوافقة مع الشريعة الإسلامية. وكانت الوثائق المتعلقة بالتمويل الأصلي  قد صيغت من قبل مستشار المقترضين، وبناءً على ذلك طلب المقرضون أنه يجب على المدير الشريك، سراج الإسلام صياغة جميع وثائق الإضافة الجديدة للصفقة مرة أخرى لأنها لم تعد صفقة مباشرة ولكن إعادة هيكلة التمويل بالكامل.</p>
      <p className="arabic oneOneRem">كانت إدارة مجموعة من المقرضين السعوديين وبنك دولي أمرًا معقدًا كما هو متوقع، حيث كان لكل بنك وجهات نظر مختلفة بشأن المخاطر التي ينطوي عليها المشروع وبالفعل واجه إكمالها صعوبات</p>
      </>}
    </DetailsComponentLeft>
  );
};

export default Section22;
