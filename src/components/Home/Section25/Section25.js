import React from "react";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/image32.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section25 = () => {
  const {language}=useLanguage()
  return (
    <DetailsComponentLeft img={img}>
      {language==="en"?<><ul>
        <li> Advised on a US$322 million multicurrency facility for the expansion
          of an Aqueous Formaldehyde plant and the development of a
          Dimethylamine/ Dimethyl Formamide plant, a Methyl Amines plant, a
          Pentaerythritol plant, and a Methanol plant. The project is comprised
          of term loan, refinancing, revolving and standby (completion support)
          facilities with United States dollars and Saudi Riyal tranches,
          structured as an Islamic commodity-backed Murabaha.{" "}
        </li>
        <li>Advised on term loan facility of US$300 million. </li>
        <li>
          Advised on Ijara based Islamic Finance documents of a US$195 million
          development of an ethylene amines complex.{" "}
        </li>
        <li>
          Advised on Ijara based Islamic Finance documents of a US$195 million
          development of an ethylene amines complex.{" "}
        </li>
        <li>
          Advised on letter of credit facility guaranteed by a personal
          guarantor of US$100 million security documentation for Islamic Finance
          as well as conventional financing.
        </li>
        <li>
          Advised on multi-jurisdictional term loan facility of US$100 million
          guaranteed by personal guarantors.{" "}
        </li>
        <li>
          Advised on the re-structuring of existing facilities and
          re-negotiations of key terms to the extension to the existing
          facilities for SR340 million in relation to the contract extension to
          build health centres.{" "}
        </li>
      </ul></>:<>
<ul>
  <li>
تقديم المشورة بشأن تسهيلات إئتمانية متعددة العملات بقيمة 322 مليون دولار أمريكي لتوسيع مصنع مائي فورمالديهايد وتطوير مصنع ثنائي ميثيلأمين / ثنائي ميثيل فورماميد، ومصنع ميثيلأمين، ومصنع بنتريثريتول، ومصنع ميثانول. يتألف المشروع من قروض لأجل وإعادة تمويل وتدوير وتسهيلات (دعم الإنجاز) الاحتياطية بالدولار الأمريكي والريال السعودي، وهو مشروع مرابحة إسلامية مدعومة بالسلع.</li>
  <li>تقديم المشورة بشأن تسهيلات القروض لأجل بمبلغ 300 مليون دولار أمريكي.</li>
  <li>تقديم المشورة بشأن وثائق تمويل إسلامي مستند إلى الإجارة حول تطوير مجمع إمينات الإثلين بمبلغ 195 مليون دولار أمريكي.</li>
  <li>تقديم المشورة بشأن خطاب تسهيلات ائتمانية مضمونة من قبل ضامن شخصي بقيمة 100 مليون دولار أمريكي ويشمل ذلك مستندات الضمان الخاصة بالتمويل الإسلامي بالإضافة إلى التمويل التقليدي.</li>
  <li>تم تقديم المشورة بشأن تسهيلات قرض لأجل متعدد الدول بقيمة 100 مليون دولار أمريكي بضمانات شخصية.</li>
  <li>تقديم المشورة بشأن إعادة هيكلة التسهيلات القائمة وإعادة التفاوض على الشروط الرئيسة لتمديد التسهيلات القائمة بمبلغ 340 مليون ريال سعودي فيما يتعلق بتمديد العقد بناء مراكز صحية.</li>
</ul>
      </>}
    </DetailsComponentLeft>
  );
};

export default Section25;
