import React from 'react';
import Header from './components/Headers/Headers';
import Section11 from './components/Home/Section11/Section11';
import Section12 from './components/Home/Section12/Section12';
import Section13 from './components/Home/Section13/Section13';
import Section14 from './components/Home/Section14/Section14';
import Section15 from './components/Home/Section15/Section15';
import Section16 from './components/Home/Section16/Section16';
import Section17 from './components/Home/Section17/Section17';
import { useLanguage } from './components/LanguageProvider/LanguageProvider';
import MainCircle from './components/SharableComponents/MainCicle/MainCircle';

const Resume = () => {
const {language}=useLanguage()

    return (
        <div>
            <Header/>
            <MainCircle>
              {language==="en"?`PROFESSIONAL`:`
نظرة مهنية`}
              <br />
              {language==="en"?`OVERVIEW`:`عامة`}
            </MainCircle>
            <Section11/>
            <Section12/>
            <Section13/>
            <Section14/>
            <Section15/>
            <Section16/>
            <Section17/>
        </div>
    );
};

export default Resume;