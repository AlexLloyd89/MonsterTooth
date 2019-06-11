import React, { Fragment } from "react";

import "./header.css";

export default function Header() {
  return (
    <Fragment>
      <div id="header">
        <h2>
          <a href="#work">Work</a>
        </h2>
        <h2>
          <a href="#about">About</a>
        </h2>
        <h2>
          <a href="#contact">Contact</a>
        </h2>
      </div>
    </Fragment>
  );
}
