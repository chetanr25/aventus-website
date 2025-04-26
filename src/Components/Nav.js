import React from "react";
import "./css/navbar.css";
import NavItems from "./NavItems";

function Nav() {
  const arr = [
    "About",
    "Tracks",
    "Problem Statements",
    "Winners",
    "FAQ",
    "Venue",
  ];
  return (
    <div className="navbar-links">
      <div className="topnav">
        <div className="logo">
          <a href="/">
            <img src="logo.png" alt="" className="" />
          </a>
        </div>
        <ul className="navitems">
          {arr.map((items, key) => (
            <NavItems dv={items} key={key} />
          ))}
        </ul>
      </div>
      <div className="columnnav"></div>
    </div>
  );
}

export default Nav;
