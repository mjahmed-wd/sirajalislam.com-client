// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Headers/Headers";
import AboutMe from "./AboutMe";
import Resume from "./Resume";
import IslamicBanking from "./IslamicBanking";
import PublicPrivatePartnership from "./PublicPrivatePartnership";
import Corporate from "./Corporate";
import ClientRecommendation from "./ClientRecommendation";
// import Section11 from "./components/Home/Section11/Section11";
// import Section12 from "./components/Home/Section12/Section12";
// import Section13 from "./components/Home/Section13/Section13";
// import Section14 from "./components/Home/Section14/Section14";
// import Section15 from "./components/Home/Section15/Section15";
// import Section16 from "./components/Home/Section16/Section16";
// import Section17 from "./components/Home/Section17/Section17";
// import Section18 from "./components/Home/Section18/Section18";
// import Section19 from "./components/Home/Section19/Section19";
// import Section20 from "./components/Home/Section20/Section20";
// import Section21 from "./components/Home/Section21/Section21";
// import Section22 from "./components/Home/Section22/Section22";
// import Section23 from "./components/Home/Section23/Section23";
// import Section24 from "./components/Home/Section24/Section24";
// import Section25 from "./components/Home/Section25/Section25";
// import Section26 from "./components/Home/Section26/Section26";
// import Section27 from "./components/Home/Section27/Section27";
// import Section28 from "./components/Home/Section28/Section28";
// import Section29 from "./components/Home/Section29/Section29";
// import Section30 from "./components/Home/Section30/Section30";
// import Section31 from "./components/Home/Section31/Section31";
// import Section32 from "./components/Home/Section32/Section32";
// import Section33 from "./components/Home/Section33/Section33";
// import Section34 from "./components/Home/Section34/Section34";
// import Section35 from "./components/Home/Section35/Section35";
// import Section36 from "./components/Home/Section36/Section36";
// import Section37 from "./components/Home/Section37/Section37";
// import Section38 from "./components/Home/Section38/Section38";
// import Section39 from "./components/Home/Section39/Section39";
// import Section40 from "./components/Home/Section40/Section40";
// import Section41 from "./components/Home/Section41/Section41";

// other
// import Section7 from "./components/Home/Section7/Section7";
// import Section8 from "./components/Home/Section8/Section8";
// import CardComponent from "./components/SharableComponents/CardComponent/CardComponent";
// import CenterCenter from "./components/SharableComponents/CenterCenter/CenterCenter";
// import MainCircle from "./components/SharableComponents/MainCicle/MainCircle";

// import Introduction from "./components/Home/Inroduction/Introduction";
// import Review1 from './components/Home/Review/Review1/Review1';
// import Review2 from './components/Home/Review/Review2/Review2';
// import Section5 from './components/Home/Section5/Section5';
// import TimeLine from './components/Home/TimeLine/TimeLine';
// import TextImg from './components/SharableComponents/Text-Img/TextImg';

function App() {
  const Introduction = React.lazy(() =>
    import("./components/Home/Inroduction/Introduction")
  );

  const Review1 = React.lazy(() =>
    import("./components/Home/Review/Review1/Review1")
  );
  const Review2 = React.lazy(() =>
    import("./components/Home/Review/Review2/Review2")
  );
  const Section5 = React.lazy(() =>
    import("./components/Home/Section5/Section5")
  );
  const TimeLine = React.lazy(() =>
    import("./components/Home/TimeLine/TimeLine")
  );
  const TextImg = React.lazy(() =>
    import("./components/SharableComponents/Text-Img/TextImg")
  );
  // import Section7 from "./components/Home/Section7/Section7";
  // import Section8 from "./components/Home/Section8/Section8";
  // import CardComponent from "./components/SharableComponents/CardComponent/CardComponent";
  // import CenterCenter from "./components/SharableComponents/CenterCenter/CenterCenter";
  // import MainCircle from "./components/SharableComponents/MainCicle/MainCircle";
  const Section7 = React.lazy(() =>
    import("./components/Home/Section7/Section7")
  );
  const Section8 = React.lazy(() =>
    import("./components/Home/Section8/Section8")
  );
  const MainCircle = React.lazy(() =>
    import("./components/SharableComponents/MainCicle/MainCircle")
  );
  const Section11 = React.lazy(() =>
    import("./components/Home/Section11/Section11")
  );
  const Section12 = React.lazy(() =>
    import("./components/Home/Section12/Section12")
  );
  const Section13 = React.lazy(() =>
    import("./components/Home/Section13/Section13")
  );
  const Section14 = React.lazy(() =>
    import("./components/Home/Section14/Section14")
  );
  const Section15 = React.lazy(() =>
    import("./components/Home/Section15/Section15")
  );
  const Section16 = React.lazy(() =>
    import("./components/Home/Section16/Section16")
  );
  const Section17 = React.lazy(() =>
    import("./components/Home/Section17/Section17")
  );
  const Section18 = React.lazy(() =>
    import("./components/Home/Section18/Section18")
  );
  const Section19 = React.lazy(() =>
    import("./components/Home/Section19/Section19")
  );
  const Section20 = React.lazy(() =>
    import("./components/Home/Section20/Section20")
  );
  const Section21 = React.lazy(() =>
    import("./components/Home/Section21/Section21")
  );
  const Section22 = React.lazy(() =>
    import("./components/Home/Section22/Section22")
  );
  const Section23 = React.lazy(() =>
    import("./components/Home/Section23/Section23")
  );
  const Section24 = React.lazy(() =>
    import("./components/Home/Section24/Section24")
  );
  const Section25 = React.lazy(() =>
    import("./components/Home/Section25/Section25")
  );
  const Section26 = React.lazy(() =>
    import("./components/Home/Section26/Section26")
  );
  const Section27 = React.lazy(() =>
    import("./components/Home/Section27/Section27")
  );
  const Section28 = React.lazy(() =>
    import("./components/Home/Section28/Section28")
  );
  const Section29 = React.lazy(() =>
    import("./components/Home/Section29/Section29")
  );
  const Section30 = React.lazy(() =>
    import("./components/Home/Section30/Section30")
  );
  const Section31 = React.lazy(() =>
    import("./components/Home/Section31/Section31")
  );
  const Section32 = React.lazy(() =>
    import("./components/Home/Section32/Section32")
  );
  const Section33 = React.lazy(() =>
    import("./components/Home/Section33/Section33")
  );
  const Section34 = React.lazy(() =>
    import("./components/Home/Section34/Section34")
  );
  const Section35 = React.lazy(() =>
    import("./components/Home/Section35/Section35")
  );
  const Section36 = React.lazy(() =>
    import("./components/Home/Section36/Section36")
  );
  const Section37 = React.lazy(() =>
    import("./components/Home/Section37/Section37")
  );
  const Section38 = React.lazy(() =>
    import("./components/Home/Section38/Section38")
  );
  const Section39 = React.lazy(() =>
    import("./components/Home/Section39/Section39")
  );
  const Section40 = React.lazy(() =>
    import("./components/Home/Section40/Section40")
  );
  const Section41 = React.lazy(() =>
    import("./components/Home/Section41/Section41")
  );

  // const Section11to41 = React.lazy(() => import("./Section11to41.js"));
  return (<>
  <Router>
    <Switch>
      
      <Route exact path="/">
      <Header/>
      <Suspense fallback={<div>Loading...</div>}>
            <Introduction />
          </Suspense>
          {/* <Suspense fallback={<div>Loading...</div>}>
            <TimeLine />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Review1
              reviewTextEn={` I took over from Siraj but shadowed him for a few months before he
            left. Something I noticed was Siraj's dedication and persistence.
            Both qualities make Siraj a particularly effective negotiator. He
            has a great strategic grasp on a situation which is combined with a
            significant presence. Similar comments have been made by the
            internal clients, whom he served, for a number of years. Whilst at
            ISS UK, Siraj set up a number of detailed and effective systems. The
            basis of these systems are still used today across a number of areas
            (finance; risk; competition; and data protection). Siraj built the
            role of General Counsel at ISS UK and he couldn't have achieved this
            without stepping up and really understanding what was required and
            then tirelessly working to deliver as much as was possible. I'm
            grateful for his hard work.`}
              reviewerEn={`Richard Reade, General Counsel at Coats Group Plc`}
            />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Review2 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section5 />
          </Suspense> */}
          {/* <Suspense fallback={<div>Loading...</div>}>
        <TextImg />
        </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <MainCircle>
              GENERAL COUNSEL <br /> / PARTNER
            </MainCircle>
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section7 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section8 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Review1
              reviewTextEn={`I have been involved in several transactions where Siraj was advising the other side, and each time I have welcomed his courtesy and professionalism and his willingness to give due consideration to any comments and propose practical solutions for ensuring that the transaction proceeded smoothly to a successful conclusion.
          `}
              reviewerEn={`Richard Beresford, Legal Counsel, Eiger Trading Advisors Limited
          `}
            />
          </Suspense> */}
          {/* <Suspense fallback={<div>Loading...</div>}>
            <MainCircle>
              PROFESSIONAL <br /> OVERVIEW
            </MainCircle>
          </Suspense> */}
          {/* <Suspense fallback={<div>Loading...</div>}>
            <Section11 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section12 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section13 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section14 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section15 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section16 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section17 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section18 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section19 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section20 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section21 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section22 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section23 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section24 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section25 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section26 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section27 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section28 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section29 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section30 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section31 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section32 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section33 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section34 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}></Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section35 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section36 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section37 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section38 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section39 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section40 />
          </Suspense>
          <Suspense fallback={<div>Loading...</div>}>
            <Section41 />
          </Suspense> */}
      </Route>
      <Route path="/about-me">
        <AboutMe/>
      </Route>
      <Route path="/resume">
        <Resume/>
      </Route>
      <Route path="/islamic-banking">
        <IslamicBanking/>
      </Route>
      <Route path="/ppp">
        <PublicPrivatePartnership/>
      </Route>
      <Route path="/corporate">
        <Corporate/>
      </Route>
      <Route path="/clientRecommendation">
        <ClientRecommendation/>
      </Route>

    </Switch>
  </Router>
  </>
  );
}

export default App;
