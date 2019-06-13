import React, { Fragment } from "react";
import "./about.css";
import { Parallax } from "react-parallax";
import AboutCard from "../components/AboutCard";
import Alex from "../components/images/alex.png";
import Barry from "../components/images/barry.png";
import Scotty from "../components/images/scotty.jpg";

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
          <div id="about" style={{ position: "absolute", top: -250 }} />
          <div className="miniContainer">
            <p>
              Monster Tooth is a Raleigh, NC based web development agency. Born
              out of the love for coding that Alex and Barry share, Monster
              tooth wants nothing more than to help{" "}
              <span style={{ fontWeight: "bold" }}>you</span> build that really
              cool app you thought of while you were falling asleep that one
              night
            </p>
            <p>
              If you're reading this trying to figure out if we are the right
              shop to hire....
            </p>
          </div>
          <div style={{ display: "flex", justifyContent: "center" }}>
            <AboutCard
              aboutText="Co-Founder, Designer, Developer"
              aboutPicture={Alex}
              emailAddress="mailto:alex@monstertooth.tech"
              email="Alex@monstertooth.tech"
            />
            <AboutCard
              aboutText="Co-Founder, Designer, Developer"
              aboutPicture={Barry}
              emailAddress="mailto:barry@monstertooth.tech"
              email="Barry@monstertooth.tech"
            />
            <AboutCard
              aboutText="Sales Consultant"
              aboutPicture={Scotty}
              emailAddress="mailto:scotty@monstertooth.tech"
              email="Scotty@monstertooth.tech"
            />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
