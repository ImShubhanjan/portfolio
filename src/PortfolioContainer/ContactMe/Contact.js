import React from "react";
import Navbar from "../Navbar/Navbar";
import emailjs from "emailjs-com";
import "./Contact.css";
import "bootstrap/dist/css/bootstrap.css";

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
            <div class="form-floating mb-3">
              <input
                type="text"
                name="from_name"
                class="form-control"
                id="floatingInput"
                placeholder="Your full name"
              />
              <label for="floatingInput">Name</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="email"
                name="form_email"
                class="form-control"
                id="floatingInput"
                placeholder="name@example.com"
              />
              <label for="floatingInput">Email</label>
            </div>
            <div class="form-floating mb-3">
              <input
                type="text"
                name="contact_num"
                class="form-control"
                id="floatingInput"
                placeholder="123456789"
              />
              <label for="floatingInput">Contact Number(if any)</label>
            </div>
            <div class="form-floating">
              <textarea
                name="message"
                class="form-control"
                placeholder="Leave a comment here"
                id="floatingTextarea2"
                cols={60}
                rows={5}
              ></textarea>
              <label for="floatingTextarea2">Any message</label>
            </div>
            <div className=" btn-blue">
              <input className="btn-send" type="submit" value="Send" />
            </div>
          </form>
        </div>
      </div>
      <footer>
        <div className="footer-text">Created by SB &copy; 2022</div>
      </footer>
    </div>
  );
}
