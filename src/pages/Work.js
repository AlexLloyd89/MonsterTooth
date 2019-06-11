import React, { Fragment } from "react";
import WorkCard from "../components/WorkCard";
import "./work.css";

export default function Work() {
  return (
    <Fragment>
      <div className="wrapWork">
        <div style={{ maxWidth: 1170, margin: "0 auto", paddingBottom: 75 }}>
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
