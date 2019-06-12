import React, { Fragment } from "react";

export default function AboutCard(props) {
  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="aboutCard" />
      <div className="aboutContact">
        <h5>Email</h5>
      </div>
    </div>
  );
}
