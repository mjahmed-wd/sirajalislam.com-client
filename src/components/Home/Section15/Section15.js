import React from "react";
import { Timeline, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
// import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/image20.webp";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";

const Section15 = ({ align }) => {
  const {language}=useLanguage()

  return (
    <div className="mt-5">
      <DetailsComponentLeft img={img}>
        <Timeline className="custom-timeline" endless align={align}>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={language==="en"?`EVERSHEDS, LLP – LEEDS, YORKSHIRE `:`مكتب إيفرشيدس ال ال بي، يوركشير، المملكة المتحدة`}
              year={`2007`}
              designation={language==="en"?`Solicitor – Project Finance & Infrastructure Group`:`محامي – تمويل المشاريع والبنية التحتية`}
              subtitle={language==="en"?`Worked as Lead Project Lawyer on the MWDA assignment, one of the UK’s largest PFI projects
            in the waste sector. Developed documents that are now being used companywide as initial drafts for
            future projects`:`عمل كمحامي رئيس في مشروع يخص هيئة التخلص من النفايات MWDA ، أحد أكبر مشاريع مبادرة التمويل الشخصي في المملكة المتحدة في قطاع النفايات. وأعد وثائق مطورة يتم استخدامها الآن على مستوى الشركة كمسودات نموذجية للمشاريع المستقبلية.`}
            />
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={language==="en"?`ISS UK LIMITED – Woking, Surrey `:`اي اس اس يو كي ليمتد`}
              year={`2000-2007`}
              designation={language==="en"?`General Counsel (2004-2007) 
            `:`رئيس الشؤون القانونية `}
              subtitle={``}
            />
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={``}
              year={``}
              designation={language==="en"?`Senior Manager at ISS & Trainee Solicitor at Blake Morgan (2002-2004)`:`مدير أول، اي اس اس ومحامي متدرب في بليك مورجان  2002-2004`}
              subtitle={``}
            />
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={``}
              year={``}
              designation={language==="en"?`Legal Advisor (2001-2004)/Group Debt Controller (2000-2001)`:`مستشار قانوني (2001-2004) / مراقب ديون المجموعة (2000-2001) `}
              subtitle={language==="en"?`Appointed as the first legal counsel for ISS, the world’s best and largest outsourcing company
            with over 525,000 employees; established a new legal department and created
            manuals/processes for providing legal services to the ISS UK group of companies. Promoted
            rapidly through a series of increasingly responsible, mission-critical legal/ business risk
            leadership positions. Advance based on legal and regulatory compliance expertise in
            combination with strong performance in team leadership and project management`:`تم تعيينه كأول مستشار قانوني لشركة آي اس اس ISS ، أفضل وأكبر شركة الاستعانة بمصادر خارجية في العالم بها أكثر من 525000 موظف ؛ أنشأ سراج قسمًا قانونيًا جديدًا وأعد أدلة / عمليات لتقديم الخدمات القانونية لمجموعة شركات آي اس اس، المملكة المتحدة. تمت ترقيته سريعاً في وظائف حيوية ذات مهام بالمخاطر القانونية / التجارية. وكان هذا التقدم مبني على الخبرات القانونية والالتزام بالقوانين سوياً مع الأداء القوي في قيادة الفريق وإدارة المشاريع.`}
            />
          </Timeline.Item>
        </Timeline>
      </DetailsComponentLeft>
    </div>
  );
};

export default Section15;
