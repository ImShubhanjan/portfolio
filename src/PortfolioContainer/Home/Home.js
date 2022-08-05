import React from "react";
import Profile from "./Profile";
import Footer from "./Footer/Footer";
import Navbar from '../Navbar/Navbar';
import "./Home.css";
export default function Home() {
  return (
    <div className="home-container">
      <Navbar />
      <Profile />
      <Footer />
      <footer>
        <div className="footer-text">Created by SB &copy; 2022</div>
      </footer>
    </div>
  );
}
