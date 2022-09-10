import logo from "../images/logo.png";
import flag from "../images/india.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faShoppingCart,
  faLocationDot,
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
              <FontAwesomeIcon icon={faLocationDot} style={{fontSize:'17px'}}/>
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

          <div className="text-white flex items-center text-sm space-x-6 mx-6 whitespace-nowrap cursor-pointer">
            <div>
              <img src={flag} alt="flag"></img>
            </div>

            <div>
              <p>Hello, Sign in</p>
              <p className="font-bold">Account & Lists</p>
            </div>
            <div>
              <p>Returns</p>
              <p className="font-bold">& Orders</p>
            </div>
            <div>
              <FontAwesomeIcon icon={faShoppingCart} className="h-5" />
              <p className="font-bold">Cart</p>
            </div>
          </div>
        </div>
        {/* Bottom Nav */}
        <div></div>
      </header>
    );
  }
}

export default Header;
