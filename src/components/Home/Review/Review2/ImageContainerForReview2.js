import React from "react";
import img1 from "../../../../images/webp/image6.webp";
import img2 from "../../../../images/webp/image7.webp";
// import img3 from '../../../../images/webp/image8.webp'
import img4 from "../../../../images/webp/image9.webp";
import "./imageContainerForReview2.css";

const ImageContainerForReview2 = () => {
  return (
    <div className="w-100 bg-light">
      <div className="p-3 d-flex justify-content-around ImageContainerForReview2">
        <img src={img1} alt="" />
        <img src={img2} alt="" />
        <img src={img4} alt="" />
      </div>
    </div>
  );
};

export default ImageContainerForReview2;
