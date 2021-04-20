import React from "react";

const CardComponent = ({ title, children }) => {
  return (
    <div className="col-md-4 col-sm-12">
      {/* Card component for making table in section 16 */}
      <div className="shadow-lg p-3 mb-5 bg-white rounded text-center">
        <b className="mini-title">{title}</b>
        <hr style={{ borderTop: "1px dashed #999999" }} />
        {children}
      </div>
    </div>
  );
};

export default CardComponent;
