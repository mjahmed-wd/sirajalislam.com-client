import React, { createContext, useContext, useState } from "react";

export const LanguageContext = createContext();
const LanguageProvider = ({ children }) => {
 
  const [language, setLanguageToState] = useState("en");
  const setLanguage = (languageId) => {
    setLanguageToState(languageId);
    localStorage.setItem("language", languageId);
  };
  return (
    <LanguageContext.Provider value={{ language, setLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};
export const useLanguage = () => {
  return useContext(LanguageContext);
};

export default LanguageProvider;
