import React from "react";
import Carousel from "react-bootstrap/Carousel";

const ImageSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item interval={2000}>
          <img
            className="w-100"
            style={{ height: "650px" }}
            src="https://mobisoftinfotech.com/resources/wp-content/uploads/2018/11/Banner-Why-on-demand-grocery-apps-are-gaining-huge-popularity-in-India-1.png"
            alt="1st slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="w-100 h-60"
            style={{ height: "650px" }}
            src="https://cloudfrontgharpediabucket.gharpedia.com/uploads/2022/04/Carpet-Cleaning-Satellite-Ahmedabad-02-185081383-2-1.jpg"
            alt="2nd slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className=" w-100"
            style={{ height: "650px" }}
            src="https://cdn9.dissolve.com/p/D985_21_743/D985_21_743_1200.jpg"
            alt="3rd slide"
          />
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default ImageSlider;
