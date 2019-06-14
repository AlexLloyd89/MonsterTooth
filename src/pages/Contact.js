import React, { Fragment } from "react";
import "./contact.css";

export default function Contact() {
  return (
    <div className="container">
      <div className="contactIntro">
        <h1
          className="contactHeader"
          id="contact"
          style={{ textAlign: "center", marginTop: 155 }}
        >
          We Don't Bite
        </h1>
      </div>

      <div
        className="miniContainer"
        style={{ color: "#f5f5f5", padding: "20px 50px" }}
      >
        <p>
          No matter what stage of the planning/building process you are at, we
          are happy to help. Fill out the form below and tell us a little bit
          about what you want. If that feels too impersonal though, you can
          always shoot any of us an email.
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
