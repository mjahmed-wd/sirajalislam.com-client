import React from "react";
import { Timeline, Icon } from "rsuite";
// import "rsuite/dist/styles/rsuite-default.css";
import "./TimeLine.css";
import timeLineImg from '../../../images/webp/image3.webp'


const TimeLine = ({ align }) => {
  return (
    <div className="row text-center" style={{minHeight: window.innerWidth<600?"50vh":"100vh"}}>
      <div className="col-md-6 col-sm-12" style={{backgroundImage:`url(${timeLineImg})`,backgroundPosition:"bottom left",backgroundSize:"contain",backgroundRepeat:"no-repeat",minHeight:window.innerWidth<600?"70vh":"100vh"}}>
        <h2 className="pt-5" >Contents</h2>
        <Icon icon="calendar" size="5x" />
      </div>
      <div className="col-md-6 col-sm-12 mt-5 mb-5" style={{minHeight:"100vh"}}>
      <Timeline className="custom-timeline" align={align}>
              {/* Colored Timeline item as commented, incase if I need it
          
          <Timeline.Item
            dot={
              <Icon
                icon="mobile"
                size="5x"
                style={{ background: "#15b215", color: "#fff" }}
              />
            }
          >
            <p>March 3, 17:50</p>
            <p>[Received]]</p>
            <p>Your courier has arrived and the signer is the front desk</p>
          </Timeline.Item> */}
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>Introduction and Contact Details</b>
                <p>Recommendation about me and my contact details</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>General Counsel / Legal Partner</b>
                <p>Professional and career achievements</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>Professional Overview</b>
                <p>Gives a career overview</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>Education and Credentials</b>
                <p>My education and professional memberships</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>Islamic Banking / Financing / Project Finance</b>
                <p>Case studies and deal list</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>Public-Private Partnership (PPP) </b>
                <p>Case studies and deal list</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>Corporate M&A / Capital Markets </b>
                <p>Case studies and deal list</p>
              </Timeline.Item>
              <Timeline.Item dot={<Icon icon="circle" size="2x" />}>
                <b>Client Endorsement</b>
                <p>Comments about my service commitment</p>
              </Timeline.Item>
            </Timeline>
      </div>

    </div>
  );
};

export default TimeLine;
