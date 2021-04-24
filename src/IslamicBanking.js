import React from "react";
import Header from "./components/Headers/Headers";
import Section18 from "./components/Home/Section18/Section18";
import Section19 from "./components/Home/Section19/Section19";
import Section20 from "./components/Home/Section20/Section20";
import Section21 from "./components/Home/Section21/Section21";
import Section22 from "./components/Home/Section22/Section22";
import Section23 from "./components/Home/Section23/Section23";
import Section24 from "./components/Home/Section24/Section24";
import Section25 from "./components/Home/Section25/Section25";
import Section26 from "./components/Home/Section26/Section26";
import Section27 from "./components/Home/Section27/Section27";
import { useLanguage } from "./components/LanguageProvider/LanguageProvider";
import MainCircle from "./components/SharableComponents/MainCicle/MainCircle";

const IslamicBanking = () => {
  const { language } = useLanguage();
  return (
    <div>
      <Header />
      <MainCircle>
        {language === "en" ? (
          <>
            ISLAMIC BANKING <br />
            / FINANCING / <br />
            PROJECT FINANCE
          </>
        ) : (
          <>
            المصرفية الإسلامية
            <br />
            / التمويل /
            <br />
            تمويل المشاريع
          </>
        )}
      </MainCircle>

      {/* <Section18/> */}
      <Section19 />
      <Section20 />
      <Section21 />
      <Section22 />
      <Section23 />
      <Section24 />
      <Section25 />
      <Section26 />
      <Section27 />
    </div>
  );
};

export default IslamicBanking;
