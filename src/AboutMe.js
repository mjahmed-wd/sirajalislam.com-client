import React, { Suspense } from 'react';
import Header from './components/Headers/Headers';
// import MainCircle from './components/SharableComponents/MainCicle/MainCircle';

const AboutMe = () => {
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
  const Section7 = React.lazy(() =>
  import("./components/Home/Section7/Section7")
);
const Section8 = React.lazy(() =>
  import("./components/Home/Section8/Section8")
);
const MainCircle = React.lazy(() =>
  import("./components/SharableComponents/MainCicle/MainCircle")
);
    return (
        <div>
            
            <Header/>
            {/* SECTION 2-9 */}
            <Suspense fallback={<div>Loading...</div>}>
            <MainCircle>
              ABOUT <br /> ME
            </MainCircle>
          </Suspense>
            {/* <Suspense fallback={<div>Loading...</div>}>
            <TimeLine />
          </Suspense> */}
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
          <Suspense fallback={<div>Loading...</div>}>
            <MainCircle>
              GENERAL <br/> COUNSEL <br /> / PARTNER
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
          </Suspense>
        </div>
    );
};

export default AboutMe;