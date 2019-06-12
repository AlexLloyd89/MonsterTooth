import React, { Fragment } from "react";
import WorkCard from "../components/WorkCard";
import "./work.css";

function findWidth() {
  return (window.innerWidth - 1170) / 2;
}

export default function Work() {
  return (
    <Fragment>
      <div className="wrapWork">
        <div className="backgroundWork" />
        <div
          style={{
            maxWidth: 1170,
            margin: "0 auto",
            paddingBottom: 75,
            zIndex: 10,
            position: "relative"
          }}
        >
          <h1>Work</h1>
          <p>Check out some projects we're proud of</p>
          <div id="work">
            <WorkCard />
            <WorkCard />
            <WorkCard />
          </div>
        </div>
      </div>
      {/* <div className="angleWork" /> */}
    </Fragment>
  );
}
