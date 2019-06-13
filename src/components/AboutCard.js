import React, { Fragment } from "react";

export default function AboutCard(props) {
  const { aboutText, aboutPicture, emailAddress, email, name } = props;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center"
      }}
    >
      <div className="aboutCard">
        <img src={aboutPicture} />
      </div>
      <div className="aboutContact">
        <p style={{ margin: 6 }}>{name}</p>

        {aboutText === "Sales Consultant" ? (
          <p
            style={{
              width: 100,
              fontSize: 17,
              color: "#313131",
              margin: "0px auto",
              padding: 5,
              textAlign: "center"
            }}
          >
            {aboutText}
          </p>
        ) : (
          <p
            style={{
              width: 200,
              fontSize: 17,
              color: "#313131",
              margin: "0px auto",
              padding: 5,
              textAlign: "center"
            }}
          >
            {aboutText}
          </p>
        )}

        <h5>
          <a href={emailAddress}>{email}</a>
        </h5>
      </div>
    </div>
  );
}
