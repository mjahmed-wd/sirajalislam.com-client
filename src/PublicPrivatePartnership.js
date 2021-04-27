import React from "react";
import Section28 from "./components/Home/Section28/Section28";
import Section29 from "./components/Home/Section29/Section29";
import Section30 from "./components/Home/Section30/Section30";
import Section31 from "./components/Home/Section31/Section31";
import Section32 from "./components/Home/Section32/Section32";
import Section33 from "./components/Home/Section33/Section33";
import Section34 from "./components/Home/Section34/Section34";
import Section35 from "./components/Home/Section35/Section35";
import { useLanguage } from "./components/LanguageProvider/LanguageProvider";
import MainCircle from "./components/SharableComponents/MainCicle/MainCircle";
import pppEn from "./images/webp/circles/pppEn.png"
import pppAr from "./images/webp/circles/pppAr.png"

const PublicPrivatePartnership = () => {
  const {language}=useLanguage()
  return (
    <div id="ppp">
        {/* <Header/> */}
     <MainCircle img={language==="en"?pppEn:pppAr}/>
      {/* <MainCircle>
       {language==="en"?<> PUBLIC <br />
        PRIVATE <br />
        PARTNERSHIP <br />
        (PPP)</>:<>
        الشراكة<br/> بين القطاعين<br/> العام والخاص (PPP)
        </>}
      </MainCircle> */}
      <Section28 />
      <Section29 />
      <Section30 />
      <Section31 />
      <Section32 />
      <Section33 />
      <Section34 />
      <Section35 />
    </div>
  );
};

export default PublicPrivatePartnership;
