import React from "react";
import logo from "../images/Amazon-India-Logo-PNG-White.png";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img src={logo} alt="logo" height="38" />
        </a>

        <div className="container">
          <form className="d-flex" role="search">
            <input
              style={{ margin: "0 auto" }}
              className="form-control w-50"
              type="search"
            />
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
