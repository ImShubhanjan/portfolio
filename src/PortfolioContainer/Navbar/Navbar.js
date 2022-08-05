import React from "react";
import About from '../AboutMe/About';
import "./Navbar.css";
import {Link} from 'react-router-dom';
export default function Navbar() {
  return (
    <nav>
      <label className="logo">
        <a>PORTFOLIO</a>
      </label>
      <ul className="nav-links">
        {/* <li>
          <Link to={{pathname: '../AboutMe/About'}} target="_blank"> About me </Link>
        </li> */}
        <li>
          <a href="#">Contact me</a>
        </li>
        <li>
          <a href="#">Let's Connect</a>
        </li>
      </ul>
    </nav>
  );
}
