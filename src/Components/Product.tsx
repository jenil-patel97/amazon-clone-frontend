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
import mcb from "../images/HotDeals/macbook-pro.png";
import tv from "../images/HotDeals/tv.png";
import headphones from "../images/HotDeals/headphones.webp";
import smartwatch from "../images/HotDeals/smt.webp";
import dslr from "../images/HotDeals/dslr.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faIndianRupeeSign,
  faStar,
  faStarHalfStroke,
} from "@fortawesome/free-solid-svg-icons";

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

      <h2 className="text-3xl font-semibold my-8 cursor-default">
        Electronics & accessories
      </h2>
      <div className="w-auto relative">
        <div className="flex cursor-pointer">
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
        </div>
      </div>

      {/* Hot Deals */}

      <div className="mt-4">
        <h3 className="text-3xl font-semibold cursor-default">Hot Deals</h3>
      </div>

      <div className="flex flex-wrap ">
        <div>
          <div className="w-[280px] h-52 p-3 ">
            <img src={mcb} alt="mac" className="w-full h-full object-contain" />
          </div>
          <p className="font-semibold mt-1">Apple Macbook Pro 13</p>
          <p className="font-semibold mt-2">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> 92,900
          </p>
          <div className="mt-2">
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              color="#e0c40b"
            ></FontAwesomeIcon>
          </div>
        </div>

        <div className="w-[280px] h-[195px] p-3">
          <img src={tv} alt="tv" className="w-full h-full object-contain" />
          <p className="font-semibold mt-6">
            Mi 5X 138.8 cm (55 inch) 4K Ultra HD LED Android TV
          </p>
          <p className="font-semibold mt-2">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> 46,999
          </p>
          <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
          <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
          <FontAwesomeIcon
            icon={faStarHalfStroke}
            color="#e0c40b"
          ></FontAwesomeIcon>
        </div>

        <div className="w-50 h-52 p-3">
          <img
            src={headphones}
            alt="headphone"
            className="w-full h-full object-contain"
          />
          <p className="font-semibold mt-6">boAt Rockerz 460</p>
          <p className="font-semibold mt-2">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> 1,799
          </p>
          <div className="mt-2">
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
          </div>
        </div>

        <div className="w-50 h-52 p-3">
          <img
            src={smartwatch}
            alt="watch"
            className="w-full h-full object-contain"
          />
          <p className="font-semibold mt-6">boAt Storm Smart Watch</p>
          <p className="font-semibold mt-2">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> 2,499
          </p>
          <div className="mt-2">
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon
              icon={faStarHalfStroke}
              color="#e0c40b"
            ></FontAwesomeIcon>
          </div>
        </div>

        <div className="w-50 h-52 p-3">
          <img src={dslr} alt="dslr" className="w-full h-full object-contain" />
          <p className="font-semibold mt-6">
            Canon EOS 1500D 24.1MP DSLR Camera
          </p>
          <p className="font-semibold mt-2">
            <FontAwesomeIcon icon={faIndianRupeeSign} /> 39,990
          </p>
          <div className="mt-2">
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
            <FontAwesomeIcon icon={faStar} color="#e0c40b"></FontAwesomeIcon>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Product;
