import logo from "../images/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <header>
        {/* Top Nav */}
        <div className="flex items-center bg-[#0f1111] p-1 py-2 flex-grow">
          <div className="mt-2 flex items-center flex-grow sm:flex-grow-0">
            <img
              src={logo}
              alt="logo"
              width={150}
              height={40}
              className="object-contain cursor-pointer"
            />
          </div>

          {/* Search Bar */}
          <div className="hidden sm:flex items-center ml-6 h-10 rounded-md flex-grow cursor-pointer bg-amber-300 hover:bg-amber-400">
            <input
              className="p-2 h-full flex-grow flex-shrink rounded-l-md focus:outline-none px-4"
              type="text"
            />
            <FontAwesomeIcon icon={faMagnifyingGlass} className="h-5 p-4" />
          </div>
        </div>
        {/* Bottom Nav */}
        <div></div>
      </header>
    );
  }
}

export default Header;
