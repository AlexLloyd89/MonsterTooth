import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "./header.css";
import Logo from "./images/MonsterTooth_logo.png";

export default function Header() {
  return (
    <Fragment>
      <div id="header">
        <h2>
          <Link to="/work">Work</Link>
        </h2>
        <Link to="/">
          <img src={Logo} alt="Monster Tooth Logo" />
        </Link>
        <h2>
          <Link to="/contact">Contact</Link>
        </h2>
      </div>
    </Fragment>
  );
}
