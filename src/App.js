// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
// import Header from "./components/Headers/Headers";
// import AboutMe from "./AboutMe";
// import Resume from "./Resume";
// import IslamicBanking from "./IslamicBanking";
// import PublicPrivatePartnership from "./PublicPrivatePartnership";
// import Corporate from "./Corporate";
// import ClientRecommendation from "./ClientRecommendation";
import "./responsive.css";
import "./App.css";
import LanguageProvider from "./components/LanguageProvider/LanguageProvider";
import HeaderDrawer from "./components/Headers/HeaderDrawer";
import Mail from "./components/Mail/Mail";
// import NavigateToTop from "./components/NavigateToTop/NavigateToTop";
// import Section1 from "./components/Home/Section1/Section1";
function App() {
  const Introduction = React.lazy(() =>
    import("./components/Home/Inroduction/Introduction")
  );
  const AboutMe = React.lazy(() => import("./AboutMe"));
  const Section1 = React.lazy(() =>
    import("./components/Home/Section1/Section1.js")
  );
  const Resume = React.lazy(() => import("./Resume.js"));
  const IslamicBanking = React.lazy(() => import("./IslamicBanking.js"));
  const PublicPrivatePartnership = React.lazy(() =>
    import("./PublicPrivatePartnership.js")
  );
  const Corporate = React.lazy(() => import("./Corporate.js"));
  const ClientRecommendation = React.lazy(() =>
    import("./ClientRecommendation.js")
  );

  return (
    <LanguageProvider>
      {/* <Header /> */}
      <HeaderDrawer />
      {/* <NavigateToTop/> */}
      {/* <Suspense
              fallback={<div style={{ height: "110vh" }}>Loading...</div>}
            >
              <Introduction />
            </Suspense> */}
      <Suspense fallback={<div style={{ height: "110vh" }}>Loading...</div>}>
        <Section1 />
      </Suspense>
      <Suspense fallback={<div style={{ height: "110vh" }}>Loading...</div>}>
        <AboutMe />
      </Suspense>
      <Suspense fallback={<div style={{ height: "110vh" }}>Loading...</div>}>
        <Resume />
      </Suspense>
      <Suspense fallback={<div style={{ height: "110vh" }}>Loading...</div>}>
        <Corporate />
      </Suspense>
      <Suspense fallback={<div style={{ height: "110vh" }}>Loading...</div>}>
        <PublicPrivatePartnership />
      </Suspense>
      <Suspense fallback={<div style={{ height: "110vh" }}>Loading...</div>}>
        <IslamicBanking />
      </Suspense>

      <Suspense fallback={<div style={{ height: "110vh" }}>Loading...</div>}>
        <ClientRecommendation />
      </Suspense>
      <Mail/>
    </LanguageProvider>
  );
}

export default App;
