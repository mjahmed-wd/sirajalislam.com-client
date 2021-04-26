// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Headers/Headers";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import IslamicBanking from "./IslamicBanking";
import PublicPrivatePartnership from "./PublicPrivatePartnership";
import Corporate from "./Corporate";
import ClientRecommendation from "./ClientRecommendation";
import "./responsive.css";
import "./App.css";
import LanguageProvider from "./components/LanguageProvider/LanguageProvider";
import HeaderDrawer from "./components/Headers/HeaderDrawer";
import NavigateToTop from "./components/NavigateToTop/NavigateToTop";

function App() {
  const Introduction = React.lazy(() =>
    import("./components/Home/Inroduction/Introduction")
  );

  return (
    <LanguageProvider>
      <Router>
        <Switch>
          <Route exact path="/">
            {/* <Header /> */}
            <HeaderDrawer/>
            {/* <NavigateToTop/> */}
            <Suspense fallback={<div>Loading...</div>}>
              <Introduction />
            </Suspense>
            <AboutMe />
            <Resume />
            <IslamicBanking />
            <PublicPrivatePartnership />
            <Corporate />
            <ClientRecommendation />
          </Route>
          <Route path="/about-me">
            <AboutMe />
          </Route>
          <Route path="/resume">
            <Resume />
          </Route>
          <Route path="/islamic-banking">
            <IslamicBanking />
          </Route>
          <Route path="/ppp">
            <PublicPrivatePartnership />
          </Route>
          <Route path="/corporate">
            <Corporate />
          </Route>
          <Route path="/clientRecommendation">
            <ClientRecommendation />
          </Route>
        </Switch>
      </Router>
    </LanguageProvider>
  );
}

export default App;
