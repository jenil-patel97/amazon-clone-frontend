import React from "react";
import mb1 from "../images/Products/mb-1.jpg";
import mb2 from "../images/Products/mb-2.jpg";
import mb3 from "../images/Products/mb-3.jpg";
import mb4 from "../images/Products/mb-4.jpg";
import mb5 from "../images/Products/mb-5.jpg";
import mb6 from "../images/Products/mb-6.jpg";
import mb7 from "../images/Products/mb-7.jpg";
import mb8 from "../images/Products/mb-8.jpg";
import el1 from "../images/Electronics/el-1.jpg";
import el2 from "../images/Electronics/el-2.jpg";
import el3 from "../images/Electronics/el-3.jpg";
import el4 from "../images/Electronics/el-4.jpg";
import el5 from "../images/Electronics/el-5.jpg";
import el6 from "../images/Electronics/el-6.jpg";
import el7 from "../images/Electronics/el-7.jpg";
import el8 from "../images/Electronics/el-8.jpg";
// import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

type Props = {};

const Product = (props: Props) => {
  return (
    // Mobile Products
    <div>
      <h2 className="text-3xl font-semibold">Bestsellers Mobiles</h2>
      <div className="grid grid-flow-row grid-cols-4 gap-8">
        <div className="shadow-lg shadow-black mt-[15px] rounded-lg">
          <img src={mb1} alt="mb1" className="rounded" />
        </div>
        <div className="shadow-lg shadow-black mt-[15px]">
          <img src={mb2} alt="mb2" className="rounded" />
        </div>
        <div className="shadow-lg shadow-black mt-[15px]">
          <img src={mb3} alt="mb3" className="rounded" />
        </div>
        <div className="shadow-lg shadow-black mt-[15px]">
          <img src={mb4} alt="mb4" className="rounded" />
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-8 mt-5">
        <div className="shadow-lg shadow-black mt-[25px] rounded-lg">
          <img src={mb5} alt="mb5" className="rounded" />
        </div>
        <div className="shadow-lg shadow-black mt-[25px]">
          <img src={mb6} alt="mb6" className="rounded" />
        </div>
        <div className="shadow-lg shadow-black mt-[25px]">
          <img src={mb7} alt="mb7" className="rounded" />
        </div>
        <div className="shadow-lg shadow-black mt-[25px]">
          <img src={mb8} alt="mb8" className="rounded" />
        </div>
      </div>
      {/* Electronics Products */}

      <h2 className="text-3xl font-semibold my-8">Electronics & accessories</h2>
      <div className="w-auto relative">
        <div className="flex">
          {/* <Carousel
            autoPlay
            infiniteLoop
            showStatus={false}
            showIndicators={false}
            showThumbs={false}
            interval={5000}
          > */}
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el1} alt="el1" />
            <h3>Headphones</h3>
          </div>
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el2} alt="el2" />
            <h3>Fitness trackers & smartwatches</h3>
          </div>
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el3} alt="el3" />
            <h3>Computer accessories</h3>
          </div>
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el4} alt="el4" />
            <h3>Pen Drives</h3>
          </div>
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el5} alt="el5" />
            <h3>Memory Cards</h3>
          </div>
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el6} alt="el6" />
            <h3>Routers & networking devices</h3>
          </div>
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el7} alt="el7" />
            <h3>Musical instruments</h3>
          </div>
          <div className="h-[277px] w-[277px] text-center">
            <img loading="lazy" src={el8} alt="el8" />
            <h3>Camera accessories</h3>
          </div>
          {/* </Carousel> */}
        </div>
      </div>
    </div>
  );
};
export default Product;
