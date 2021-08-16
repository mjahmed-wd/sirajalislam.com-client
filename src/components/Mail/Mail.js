import React from "react";
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const Mail = () => {
  return (
    <div>
      <a
        href="mailto:me@sirajalislam.com"
        className="mail"
      >
        <MailOutlineIcon fontSize="large"/>
      </a>
    </div>
  );
};

export default Mail;
