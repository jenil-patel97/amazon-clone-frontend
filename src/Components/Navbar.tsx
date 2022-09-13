import logo from "../images/Navabar/logo.png";
import flag from "../images/Navabar/india.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faLocationDot,
  faBars,
} from "@fortawesome/free-solid-svg-icons";
import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header>
        {/* Top Nav */}
        <div className="flex items-center bg-[#131921] p-1 py-2 flex-grow ">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <img
              src={logo}
              alt="logo"
              width={130}
              height={40}
              className="object-contain cursor-pointer"
            />
            <div className="text-white flex items-center text-sm mx-6 cursor-pointer">
              <FontAwesomeIcon
                icon={faLocationDot}
                style={{ fontSize: "17px" }}
              />
              <div className="mx-2">
                <p>Hello,</p>
                <p className="font-bold">Select your address</p>
              </div>
            </div>
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center h-10 rounded-md flex-grow cursor-pointer bg-amber-300 hover:bg-amber-400">
            <input
              className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 p-4" />
          </div>

          {/* Right */}

          <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap">
            <div>
              <img src={flag} alt="flag"></img>
            </div>

            <div className="link">
              <p>Hello, Sign in</p>
              <p className="font-bold md:text-sm">Account & Lists</p>
            </div>
            <div className="link">
              <p>Returns</p>
              <p className="font-bold md:text-sm">& Orders</p>
            </div>
            <div className="relative link flex items-center">
              <span className="absolute top-[-5px] right-0 md:right-[27px] h-5 w-4 bg-yellow-400 text-center rounded-full text-black font-bold">
                0
              </span>
              <FontAwesomeIcon icon={faShoppingCart} className="h-6" />
              <p className="hidden md:inline font-bold mx-1 md:text-sm mt-3">
                Cart
              </p>
            </div>
          </div>
        </div>
        {/* Bottom Nav */}
        <div className="flex items-center space-x-7 p-2 pl-4 bg-[#232f3e] text-white text-sm">
          <p className="link flex items-center">
            <FontAwesomeIcon icon={faBars} className="h-5 mr-2" />
            All
          </p>
          <p className="link">Best Sellers</p>
          <p className="link">Mobiles</p>
          <p className="link">Books</p>
          <p className="link hidden lg:inline-flex">Customer Service</p>
          <p className="link">Electronics</p>
          <p className="link">Fashion</p>
          <p className="link hidden lg:inline-flex">Prime</p>
          <p className="link hidden lg:inline-flex">New Release</p>
          <p className="link">Home & Kitchen</p>
          <p className="link hidden lg:inline-flex">Amazon Pay</p>
          <p className="link hidden lg:inline-flex">Computers</p>
          <p className="link hidden lg:inline-flex">Coupons</p>
          <p className="link hidden lg:inline-flex">Toys & Games</p>
        </div>
      </header>
    );
  }
}

export default Header;
