import React from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";

const TitleAndList = ({ title, year, designation, subtitle, list }) => {
  const {language}=useLanguage()
  return (
    <section className={`${language==="ar"?"arabic":""}`}>
      <div className="d-flex justify-content-between">
        <p className="mini-title oneOneRem">{title}</p>
        <p className="oneOneRem">{year}</p>
      </div>
      <div className="designation">
        <b>{designation}</b>
      </div>
      <p className="mini-subtitle oneOneRem">{subtitle}</p>
      <ul>
        {list?.map((li) => (
          <li key={li.data}>{li.data}</li>
        ))}
        
      </ul>
    </section>
  );
};

export default TitleAndList;
