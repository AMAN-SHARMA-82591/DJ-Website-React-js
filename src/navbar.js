import React from "react";
import { NavLink } from "react-router-dom";
import "./App.css";

function navbar() {
  return (
    <div className="navbar-section">
      <nav className="nav-link-main">
        <div className="main-logo">
          <NavLink className="logo-nav" to="/">
            DJ<span>.</span>
          </NavLink>
        </div>

        <ul className="ul-section">
          <li className="main-multiple-sec-container">
            <NavLink className="nav-link" to="/home">
              Home
            </NavLink>
          </li>
          <li className="main-multiple-sec-container">
            <NavLink className="nav-link active" to="/events">
              Events
              {/* <div className="hidden-items shows"></div> */}
            </NavLink>
          </li>
          {/* <li className="main-multiple-sec-container">
            <NavLink className="nav-link" to="/about">
              About
            </NavLink>
          </li> */}
          <li className="main-multiple-sec-container">
            <NavLink className="nav-link" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
