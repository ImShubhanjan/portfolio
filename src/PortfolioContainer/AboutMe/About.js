import React from "react";
import Navbar from "../Navbar/Navbar";
import './About.css';
export default function About() {
  return (
    <div>
      <Navbar />
      <div className="timeline">
        <h1 className="heading">Education</h1>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Jan - 2022</h1>
            <p className="card-detail">
              Intern at Persistent System Limited.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2018 - 2022</h1>
            <p className="card-detail">
              Graduated from JIS College of Engineering in Computer Science & Engineering.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2017</h1>
            <p className="card-detail">
              Passed Class 12 from Athpur National Model Higher Secondary School in Computer Science
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">2015</h1>
            <p className="card-detail">
            Passed Class 10 from Athpur National Model Higher Secondary School in General Studies with Science.
            </p>
          </div>
        </div>
        <div className="card">
          <div className="card-body">
            <h1 className="card-title">Before 2015</h1>
            <p className="card-detail">
              General Studies from Athpur National Model Higher Secondary School.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
