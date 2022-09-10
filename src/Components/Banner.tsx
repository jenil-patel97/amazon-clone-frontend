import React from "react";
import Banner1 from "../images/Banners/banner-1.jpg";
import Banner2 from "../images/Banners/banner-2.jpg";
import Banner3 from "../images/Banners/banner-3.jpg";
import Banner4 from "../images/Banners/banner-4.jpg";
import Banner5 from "../images/Banners/banner-5.jpg";
import Banner6 from "../images/Banners/banner-6.jpg";
import Banner7 from "../images/Banners/banner-7.jpg";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type Props = {};

const Banner = (props: Props) => {
  return (
    <div className="relative">
      <div className="absolute w-full h-32 bg-gradient-to-t from-gray-100 to-transparent bottom-0 z-20" />
      <Carousel
        autoPlay
        infiniteLoop
        showStatus={false}
        showIndicators={false}
        showThumbs={false}
        interval={5000}
      >
        <div>
          <img loading="lazy" src={Banner1} alt="banner-1" />
        </div>
        <div>
          <img loading="lazy" src={Banner2} alt="banner-2" />
        </div>
        <div>
          <img loading="lazy" src={Banner3} alt="banner-3" />
        </div>
        <div>
          <img loading="lazy" src={Banner4} alt="banner-4" />
        </div>
        <div>
          <img loading="lazy" src={Banner5} alt="banner-5" />
        </div>
        <div>
          <img loading="lazy" src={Banner6} alt="banner-6" />
        </div>
        <div>
          <img loading="lazy" src={Banner7} alt="banner-7" />
        </div>
      </Carousel>
    </div>
  );
};

export default Banner;
