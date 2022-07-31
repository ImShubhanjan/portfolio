import React from "react";
import Typical from "react-typical";
import "./Profile.css";
export default function Profile() {
  return (
    <div className="profile-container">
      <div className="profile-parent">
        <div className="profile-details">
          <div className="colz">
            <div className="colz-icon">
              <a href="https://m.facebook.com/shubhanjan.barai">
                <i className="fa fa-facebook-square"></i>
              </a>
              <a href="https://www.linkedin.com/in/shubhanjan-barai-7897a1212/">
                <i className="fa fa-linkedin"></i>
              </a>
              <a href="https://www.instagram.com/the_shubhanjan_official/">
                <i className="fa fa-instagram"></i>
              </a>
            </div>
          </div>
          <div className="profile-details-name">
            <span className="primary-text">
              {" "}
              Hello, I'm <span className="highlighted-text">Shubhanjan</span>
            </span>
          </div>
          <div className="profile-details-role">
            <span className="primary-text">
              {" "}
              <h1>
                {" "}
                <Typical
                  loop={Infinity}
                  steps={[
                    "MERN Stack Developer",
                    2000,
                    "Web Developer",
                    2000,
                    "Java Developer",
                    2000,
                  ]}
                />
              </h1>
              <span className="profile-role-tagline">
                Let's build Frontend and Backend Operations.
              </span>
            </span>
          </div>
          <div className="profile-options">
              <button className="btn mail-btn"> Mail Me </button>
            <a href="NewResumeUpdated5.pdf" download="ShubhanjanResume.pdf">
              <button className="btn highlighted-btn"> Download Resume </button>
            </a>
          </div>
        </div>
        <div className="profile-picture">
          <div className="profile-picture-background"></div>
        </div>
      </div>
    </div>
  );
}
