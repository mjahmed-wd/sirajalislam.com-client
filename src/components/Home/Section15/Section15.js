import React from "react";
import { Timeline, Icon } from "rsuite";
import "rsuite/dist/styles/rsuite-default.css";
import CenterCenter from "../../SharableComponents/CenterCenter/CenterCenter";
import img from "../../../images/webp/image20.webp";
import DetailsComponentLeft from "../../SharableComponents/DetailsComponent/DetailsComponentLeft";
import TitleAndList from "../../SharableComponents/TitleAndList/TitleAndList";

const Section15 = ({ align }) => {
  //   const title = ``;
  //   const year = ``;
  //   const designation = ``;
  //   const subtitle = ``;
  //   const list = [
  //     {
  //       data: ``,
  //     },
  //   ];
  //   const data = [
  //     {
  //       title: ``,
  //       year: ``,
  //       designation: ``,
  //       subtitle: ``,
  //       list: [{ data: `` }],
  //     },
  //   ];

  return (
    <div className="mt-5">
      <DetailsComponentLeft img={img}>
        <Timeline className="custom-timeline" endless align={align}>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={`EVERSHEDS, LLP – LEEDS, YORKSHIRE `}
              year={`2007`}
              designation={`Solicitor – Project Finance & Infrastructure Group`}
              subtitle={`Worked as Lead Project Lawyer on the MWDA assignment, one of the UK’s largest PFI projects
            in the waste sector. Developed documents that are now being used companywide as initial drafts for
            future projects`}
            />
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={`ISS UK LIMITED – Woking, Surrey `}
              year={`2000-2007`}
              designation={`General Counsel (2004-2007) 
            `}
              subtitle={``}
            />
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={``}
              year={``}
              designation={`Senior Manager at ISS & Trainee Solicitor at Blake Morgan (2002-2004)`}
              subtitle={``}
            />
          </Timeline.Item>
          <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
            <TitleAndList
              title={``}
              year={``}
              designation={`Legal Advisor (2001-2004)/Group Debt Controller (2000-2001)`}
              subtitle={`Appointed as the first legal counsel for ISS, the world’s best and largest outsourcing company
            with over 525,000 employees; established a new legal department and created
            manuals/processes for providing legal services to the ISS UK group of companies. Promoted
            rapidly through a series of increasingly responsible, mission-critical legal/ business risk
            leadership positions. Advance based on legal and regulatory compliance expertise in
            combination with strong performance in team leadership and project management`}
            />
          </Timeline.Item>
        </Timeline>
      </DetailsComponentLeft>
    </div>
  );
};

export default Section15;
