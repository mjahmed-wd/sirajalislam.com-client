import React from "react";
import img1 from "../../../../images/webp/siraj1.webp";
import img2 from "../../../../images/webp/brand1.webp";
// import img3 from '../../../../images/webp/image8.webp'
import img4 from "../../../../images/webp/brand3.webp";
import "./imageContainerForReview2.css";

const ImageContainerForReview3 = () => {
  return (
    <div className="w-100 bg-light">
      <div className="p-3 row text-center ImageContainerForReview2">
<div className="col-4">
<img src={img1} alt="" className={window.innerWidth<600?"w-100":"w-50"}/>

</div>
<div className="col-4">
<img src={img2} alt=""  className={window.innerWidth<600?"w-100":"w-50"}/>

</div>
<div className="col-4">
<img src={img4} alt=""  className={window.innerWidth<600?"w-100":"w-50"}/>

</div>

      </div>
    </div>
  );
};

export default ImageContainerForReview3;
