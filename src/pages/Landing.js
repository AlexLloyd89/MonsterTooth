import React, { Fragment } from "react";
import Logo from "../components/images/logo.png";
import "./landing.css";

export default function Landing() {
  return (
    <Fragment>
      <div
        style={{
          maxWidth: 1170,
          margin: "0 auto"
        }}
      >
        <div id="landing" className="introTop">
          <div className="introStuff">
            <h1>Design.</h1>
            <h1>Develop.</h1>
            <h1>Deploy.</h1>
          </div>
          <div className="introLogo">
            <img src={Logo} alt="logo" className="logoImg" />
            <h1 className="logoTop">Monster</h1>
            <h1 className="logoBottom">Tooth</h1>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
