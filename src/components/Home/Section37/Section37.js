import React from "react";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import img from "../../../images/webp/image53.webp";
import laptopImg from "../../../images/webp/laptop3.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
const Section37 = () => {
  const { language } = useLanguage();
  return (
    <DetailsComponentLeft img={img}>
      <div className="text-center">
        <img src={laptopImg} alt="" className="width50-100" />
      </div>

      {language === "en" ? (
        <p>
          Having worked on numerous M&A transactions, both buyer / seller side,
          it was a pleasure to advice SALIC, a wholly owned subsidiary of the
          Public Investment Fund (PIF), the sovereign wealth fund of the Kingdom
          of Saudi Arabia in its acquisition of 29.91% stake in Daawat Foods Ltd
          from India Agri Business Fund, as part of the Kingdom of Saudi
          Arabia’s strategic food security program.
        </p>
      ) : (
        <p className="arabic oneOneRem">
          معاملات الاندماج والاستحواذ ممثلاً المشتري / البائع، قام بتقديم
          المشورة للشركة السعودية للاستثمار الزراعي و الإنتاج الحيواني «سالك»،
          وهي شركة مملوكة بالكامل لصندوق الاستثمارات العامة (PIF) وهو صندوق
          سيادي للمملكة العربية السعودية وذلك فيما يتعلق بحيازتها على نسبة
          29.91٪ في شركة دعوات للأغذية المحدودة Daawat Foods Ltd من صندوق
          الأعماال الزراعية الهندي India Agri Business Fund ، كجزء من برنامج
          الأمن الغذائي الاستراتيجي في المملكة.
        </p>
      )}
    </DetailsComponentLeft>
  );
};

export default Section37;
