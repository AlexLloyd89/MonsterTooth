import React, { Fragment } from "react";
import "./about.css";
import { Parallax, Background } from "react-parallax";
import AboutCard from "../components/AboutCard";

export default function About() {
  return (
    <Fragment>
      <Parallax
        style={{
          backgroundImage:
            "linear-gradient(184deg,  rgba(245, 245, 245, 1) 35%, rgba(157, 228, 215, 0) 35.1%    )"
        }}
        bgImage={require("../components/images/cityBG.jpg")}
        bgImageAlt="the cat"
        strength={700}
      >
        <div style={{ height: "500px" }} />
      </Parallax>

      <div className="container">
        <div className="aboutMain">
          <h1
            style={{ float: "right", position: "absolute", top: -80, right: 0 }}
          >
            About
          </h1>
          <br />
          <div className="miniContainer">
            <p>
              This is text about us. Don't read this. This is text about us.
              Don't read this. This is text about us. Don't read this. This is
              text about us. Don't read this. This is text about us. Don't read
              this. This is text about us. Don't read this.
            </p>
            <p>
              This is text about us. Don't read this. This is text about us.
              Don't read this. This is text about us. Don't read this. This is
              text about us. Don't read this. This is text about us. Don't read
              this. This is text about us. Don't read this. This is text about
              us. Don't read this. This is text about us. Don't read this. This
              is text about us. Don't read this. This is text about us. Don't
              read this. This is text about us. Don't read this. This is text
              about us. Don't read this.
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard />
            <AboutCard />
            <AboutCard />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
