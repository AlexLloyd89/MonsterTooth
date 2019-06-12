import React, { Fragment } from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="container">
      <div className="contactIntro">
        <h1 style={{ textAlign: "center" }}>We Don't Bite</h1>
      </div>
      <div className="miniContainer" style={{ color: "#f5f5f5" }}>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLSc51IxdGcUIwYgPSXZ6vloABMnNo4YkhJR2AzjB9uHYiAqdPw/viewform?embedded=true"
          width="640"
          height="946"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
        >
          Loading...
        </iframe>
      </div>
    </div>
  );
}
