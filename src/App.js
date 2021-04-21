// import logo from "./logo.svg";
import "bootstrap/dist/css/bootstrap.min.css";
import React, { Suspense } from "react";
import "./App.css";
import Section11 from "./components/Home/Section11/Section11";
import Section12 from "./components/Home/Section12/Section12";
import Section13 from "./components/Home/Section13/Section13";
import Section14 from "./components/Home/Section14/Section14";
import Section15 from "./components/Home/Section15/Section15";
import Section16 from "./components/Home/Section16/Section16";
import Section17 from "./components/Home/Section17/Section17";
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
import Section28 from "./components/Home/Section28/Section28";
import Section29 from "./components/Home/Section29/Section29";
import Section30 from "./components/Home/Section30/Section30";
import Section31 from "./components/Home/Section31/Section31";
import Section32 from "./components/Home/Section32/Section32";
import Section33 from "./components/Home/Section33/Section33";
import Section34 from "./components/Home/Section34/Section34";
import Section35 from "./components/Home/Section35/Section35";
import Section36 from "./components/Home/Section36/Section36";
import Section37 from "./components/Home/Section37/Section37";
import Section38 from "./components/Home/Section38/Section38";
import Section7 from "./components/Home/Section7/Section7";
import Section8 from "./components/Home/Section8/Section8";
import CardComponent from "./components/SharableComponents/CardComponent/CardComponent";
import CenterCenter from "./components/SharableComponents/CenterCenter/CenterCenter";
import MainCircle from "./components/SharableComponents/MainCicle/MainCircle";
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
  return (
    <div>
      <Suspense fallback={<div>Loading...</div>}>
        <Introduction />
      </Suspense>
      <Suspense fallback={<div>Loading...</div>}>
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
      </Suspense>
      {/* <Suspense fallback={<div>Loading...</div>}>
        <TextImg />
      </Suspense> */}
      <MainCircle>
        GENERAL COUNSEL <br /> / PARTNER
      </MainCircle>
      <Section7 />
      <Section8 />
      <Suspense fallback={<div>Loading...</div>}>
        <Review1
          reviewTextEn={`I have been involved in several transactions where Siraj was advising the other side, and each time I have welcomed his courtesy and professionalism and his willingness to give due consideration to any comments and propose practical solutions for ensuring that the transaction proceeded smoothly to a successful conclusion.
          `}
          reviewerEn={`Richard Beresford, Legal Counsel, Eiger Trading Advisors Limited
          `}
        />
      </Suspense>
      <MainCircle>
        PROFESSIONAL <br /> OVERVIEW
      </MainCircle>
      <Section11/>
      <Section12/>
      <Section13/>
      <Section14/>
      <Section15/>
      <Section16/>
      <Section17/>
      <Section18/>
      <Section19/>
      <Section20/>
      <Section21/>
      <Section22/>
      <Section23/>
      <Section24/>
      <Section25/>
      <Section26/>
      <Section27/>
      <Section28/>
      <Section29/>
      <Section30/>
      <Section31/>
      <Section32/>
      <Section33/>
      <Section34/>
      <Section35/>
      <Section36/>
      <Section37/>
      <Section38/>
    </div>
  );
}

export default App;
