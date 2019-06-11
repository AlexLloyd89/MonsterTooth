import React, { Fragment } from "react";
import "./contact.css";

export default function Contact() {
  return (
    <Fragment>
      <div className="intro">
        <h1 style={{ fontSize: 64, textAlign: "center" }}>We Don't Bite</h1>
      </div>
      <div className="content">
        <div className="flavor">
          <h1>Seriously, say hey.</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="contact">
          <div className="email">
            <h1>Email</h1>
            <p>Sales Team</p>
            <p>Development Team</p>
            <p>Snaggle</p>
          </div>
          <div className="social">
            <h1>Social Media</h1>
            <p>LinkedIn</p>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
