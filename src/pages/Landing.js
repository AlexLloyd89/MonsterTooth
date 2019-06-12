import React, { Fragment } from "react";

import WorkCard from "../components/WorkCard";
import alex from "../components/images/alex.png";
import barry from "../components/images/barry.png";
import Logo from "../components/images/logo.png";
import "./landing.css";

export default function Landing() {
  return (
    <Fragment>
      {/* Intro Section
      <div className="introMain">
        <div
          className="introChunk"
          style={{ borderRight: "2px solid #4fcdaf" }}
        >
          <h1 className="introHeader">Design</h1>
          <p>Flavor Text will go here</p>
        </div>
        <div
          className="introChunk"
          style={{ borderRight: "2px solid #4fcdaf" }}
        >
          <h1 className="introHeader">Develop</h1>
          <p>Flavor Text will go here</p>
        </div>
        <div className="introChunk">
          <h1 className="introHeader">Deploy</h1>
          <p>Flavor Text will go here</p>
        </div>
      </div> */}
      {/* Work Section */}
      {/* <div className="workMain">
        <WorkCard />
        <WorkCard />
        <WorkCard />
      </div> */}
      {/* About Secion */}
      {/* <div className="aboutMain">
        <h1>About Us</h1>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
        <div className="cardContainer">
          <div className="aboutCard">
            <img src={alex} alt="alex" />
          </div>
          <div className="aboutCard">
            <img src={barry} alt="barry" />
          </div>
        </div>
      </div> */}

      <div
        style={{
          maxWidth: 1170,
          margin: "0 auto"
        }}
      >
        <div className="background" />
        <div className="introTop">
          <div className="introStuff">
            <h1>Design.</h1>
            <h1>Develop.</h1>
            <h1>Deploy.</h1>
          </div>
          <div className="introLogo">
            <img src={Logo} alt="logo" style={{ height: 415 }} />
          </div>
        </div>
      </div>
    </Fragment>
  );
}
