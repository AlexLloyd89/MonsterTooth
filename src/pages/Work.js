import React, { Fragment } from "react";
import WorkCard from "../components/WorkCard";
import "./work.css";
import phitMobile from "../components/images/phitMobile.jpg";
import acropolisMobile from "../components/images/acropolisMobile.jpg";
import phitWeb from "../components/images/phit.jpg";
import acropolisWeb from "../components/images/acropolis.jpg";

class Work extends React.Component {
  state = {
    isClicked: [false, false, false],
    isSmall: [false, false, false]
  };

  clickCard = index => {
    let newIsClicked = [false, false, false];
    let newIsSmall = [true, true, true];

    newIsClicked[index] = true;
    newIsSmall[index] = false;

    this.setState({ isClicked: newIsClicked, isSmall: newIsSmall });
  };

  render() {
    return (
      <Fragment>
        <div className="wrapWork">
          {/* <div className="backgroundWork" /> */}
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
              <WorkCard
                cardBackground={this.state.isClicked[0] ? phitWeb : phitMobile}
                mobileCard={phitMobile}
                webCard={phitWeb}
                index={0}
                onClick={this.clickCard}
                cardClass={
                  this.state.isClicked[0]
                    ? "cardBig"
                    : this.state.isSmall[0]
                    ? "cardSmall"
                    : ""
                }
              />
              <WorkCard
                cardBackground={
                  this.state.isClicked[1] ? acropolisWeb : acropolisMobile
                }
                mobileCard={acropolisMobile}
                webCard={acropolisWeb}
                index={1}
                onClick={this.clickCard}
                cardClass={
                  this.state.isClicked[1]
                    ? "cardBig"
                    : this.state.isSmall[1]
                    ? "cardSmall"
                    : ""
                }
                isClicked={this.state.isClicked[1]}
              />
              <WorkCard
                index={2}
                onClick={this.clickCard}
                cardClass={
                  this.state.isClicked[2]
                    ? "cardBig"
                    : this.state.isSmall[2]
                    ? "cardSmall"
                    : ""
                }
                isClicked={this.state.isClicked[2]}
              />
            </div>
          </div>
        </div>
        {/* <div className="angleWork" /> */}
      </Fragment>
    );
  }
}

export default Work;
