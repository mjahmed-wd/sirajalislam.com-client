import React, { useEffect, useState } from "react";
import { useLanguage } from "../../LanguageProvider/LanguageProvider";
import Review1 from "../Review/Review1/Review1";
import section41bg from "../../../images/webp/section41bg.webp";
import section3bg from "../../../images/webp/section3bg.webp";
import section9bg from "../../../images/webp/section9bg.webp";

const Section41 = () => {
  const { language } = useLanguage();
//   json data is in github
  const [allReviews, setAllReviews] = useState([]);
  useEffect(() => {
    fetch(`https://sirajalislam.herokuapp.com/reviews`)
      .then((res) => res.json())
      .then((data) => {
        if (data[0].status === "ok") {
          setAllReviews(data);
        } else {
          alert(data[0].status);
        }
      });
  }, []);
  return (
    <>
      {" "}
      {allReviews.length > 0 &&
        allReviews.map((review, index) => (
          <Review1
            bgImg={index % 2 ? section3bg : section41bg}
            reviewTextEn={language === "en" ? review.en : review.ar}
            reviewerEn={language === "en" ? review.nameEn : review.nameAr}
          />
        ))}
    </>
  );
};

export default Section41;
