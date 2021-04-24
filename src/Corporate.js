import React from "react";
import Header from "./components/Headers/Headers";
import Section36 from "./components/Home/Section36/Section36";
import Section37 from "./components/Home/Section37/Section37";
import Section38 from "./components/Home/Section38/Section38";
import Section39 from "./components/Home/Section39/Section39";
import Section40 from "./components/Home/Section40/Section40";
import { useLanguage } from "./components/LanguageProvider/LanguageProvider";
import MainCircle from "./components/SharableComponents/MainCicle/MainCircle";

const Corporate = () => {
  const { language } = useLanguage();
  return (
    <div>
      <Header />
      <MainCircle>
        {language === "en" ? (
          <>
            CORPORATE <br />
            M&A / <br />
            CAPITAL MARKETS
          </>
        ) : (
          <>
            عمليات الدمج
            <br />
            والاستحواذ للشركات <br />/ أسواق رأس المال
          </>
        )}
      </MainCircle>
      <Section36 />
      <Section37 />
      <Section38 />
      <Section39 />
      <Section40 />
    </div>
  );
};

export default Corporate;
