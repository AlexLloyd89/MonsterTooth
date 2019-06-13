import React, { Fragment } from "react";

export default function AboutCard(props) {
  const { aboutText, aboutPicture, emailAddress, email } = props;
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="aboutCard">
        <img style={{ width: "inherit" }} src={aboutPicture} />
        <p
          style={{
            fontSize: 23,
            color: "white",
            margin: "0px auto",
            padding: 5,
            textAlign: "center"
          }}
        >
          {aboutText}
        </p>
      </div>
      <div className="aboutContact">
        <h5>
          <a href={emailAddress}>{email}</a>
        </h5>
      </div>
    </div>
  );
}
