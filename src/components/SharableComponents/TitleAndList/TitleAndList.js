import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const TitleAndList = ({ title, year, designation, subtitle, list }) => {
  const { language } = useLanguage();
  return (
    <section className={`${language === "ar" ? "arabic" : ""}`}>
      <div className="d-flex justify-content-between">
        <p className="mini-title oneOneRem m-2">{title}</p>
        <p className="oneOneRem m-2">{year}</p>
      </div>
      <div className="oneOneRem mt-2 mb-2">
        <b>{designation}</b>
      </div>
      <div className="mt-3 mb-3">
      {/* <i className="mini-subtitle oneOneRem">{subtitle}</i> */}
      {language==="en"?<p className="mini-subtitle oneOneRem">{subtitle}</p>:<p className="mini-subtitle oneOneRem">{subtitle}</p>}
      </div>
      <ul>
        {list?.map((li) => (
          <li key={li.data}>{li.data}</li>
        ))}
      </ul>
    </section>
  );
};

export default TitleAndList;
