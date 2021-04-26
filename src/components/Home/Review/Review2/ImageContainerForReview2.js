import React from "react";
import img1 from "../../../../images/webp/brand1.webp";
import img2 from "../../../../images/webp/image7.webp";
// import img3 from '../../../../images/webp/image8.webp'
import img4 from "../../../../images/webp/image10.webp";
import "./imageContainerForReview2.css";

const ImageContainerForReview2 = () => {
  return (
    <div className="w-100 bg-light">
      <div className="p-3 row text-center ImageContainerForReview2">
        <div className="col-4">
          <img src={img1} alt="" className="width50-100" />
        </div>
        <div className="col-4">
          <img src={img2} alt="" className="width50-100" />
        </div>
        <div className="col-4">
          <img src={img4} alt="" className="width50-100" />
        </div>
      </div>
    </div>
  );
};

export default ImageContainerForReview2;
