import React from "react";
import Navbar from "../Navbar/Navbar";
import emailjs from "emailjs-com";
import "./Contact.css";
export default function Contact() {
  function sendEmail(e) {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_3lvz6pb",
        "template_ky3z1vm",
        e.target,
        "_dwFgPlFxYBP9vFwV"
      )
      .then(
        (result) => {
          window.location.reload();
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <div>
      <Navbar />
      <div className="container">
        <h1 className="heading">Contact Me</h1>
        <div className="form-container">
          <form className="contact-form" onSubmit={sendEmail}>
            <div>
              <input type="text" class="form-input" name="from_name" placeholder=" " required />
              <label class="form-label">Your Name</label>
            </div>
            <div>
              <input autoComplete="off" type="email" class="form-input" id="email" name="from_email" placeholder=" " required />
              <label for="email" class="form-label">Your E-mail</label>
            </div>
            <div className="textarea-div">
              <textarea name="message" className="textarea-input" placeholder=" " rows="6" cols="60" required/>
              <label className="textarea-label">Your Message</label>
            </div>
            <div>
              <input class="btn btn-primary btn-blue" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
