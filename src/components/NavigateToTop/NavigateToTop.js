import React from "react";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";

const NavigateToTop = () => {
  return (
    <a
      href="#"
      style={{
        position: "fixed",
        bottom: "40px",
        right: "50px",
        color: "white",
        width: "50px",
        height: "50px",
        backgroundColor: "#524B40",
        textAlign: "center",
        lineHeight: "50px",
        border: "2px solid white",
        zIndex: "5",
      }}
    >
      <ArrowUpwardIcon />
    </a>
  );
};

export default NavigateToTop;
