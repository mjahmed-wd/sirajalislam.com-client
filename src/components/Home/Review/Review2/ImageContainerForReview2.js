import React from "react";
import img1 from "../../../../images/webp/brand1.webp";
import img2 from "../../../../images/webp/image7.webp";
// import img3 from '../../../../images/webp/image8.webp'
import img4 from "../../../../images/webp/image9.webp";
import "./imageContainerForReview2.css";

const ImageContainerForReview2 = () => {
  return (
    <div className="w-100 bg-light">
      <div className="p-3 text-center">
        <div className="row">
        <div className="col-md-4 col-sm-6">
          <img src={img1} alt=""  className={window.innerWidth<600?"w-100":"w-50"}/>
        </div>
        <div className="col-md-4 col-sm-6">
          <img src={img2} alt=""   className={window.innerWidth<600?"w-100":"w-50"}/>
        </div>
        <div className="col-md-4 col-sm-6">
          <img src={img4} alt=""   className={window.innerWidth<600?"w-100":"w-50"}/>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ImageContainerForReview2;
