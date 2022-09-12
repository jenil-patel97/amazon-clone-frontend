import React from "react";
import mb1 from "../images/Products/mb-1.jpg";
import mb2 from "../images/Products/mb-2.jpg";
import mb3 from "../images/Products/mb-3.jpg";
import mb4 from "../images/Products/mb-4.jpg";
import mb5 from "../images/Products/mb-5.jpg";
import mb6 from "../images/Products/mb-6.jpg";
import mb7 from "../images/Products/mb-7.jpg";
import mb8 from "../images/Products/mb-8.jpg";

type Props = {};

const Product = (props: Props) => {
  return (
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
          <img src={mb3} alt="mb3" className="rounded"/>
        </div>
        <div className="shadow-lg shadow-black mt-[15px]">
          <img src={mb4} alt="mb4" className="rounded"/>
        </div>
      </div>
      <div className="grid grid-flow-row grid-cols-4 gap-8 mt-5">
        <div className="shadow-lg shadow-black mt-[25px] rounded-lg">
          <img src={mb5} alt="mb5" className="rounded"/>
        </div>
        <div className="shadow-lg shadow-black mt-[25px]">
          <img src={mb6} alt="mb6" className="rounded"/>
        </div>
        <div className="shadow-lg shadow-black mt-[25px]">
          <img src={mb7} alt="mb7" className="rounded"/>
        </div>
        <div className="shadow-lg shadow-black mt-[25px]">
          <img src={mb8} alt="mb8" className="rounded"/>
        </div>
      </div>
    </div>
  );
};

export default Product;
