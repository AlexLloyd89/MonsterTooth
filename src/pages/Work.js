import React, { Fragment } from "react";
import WorkCard from "../components/WorkCard";
import "./work.css";
import phitMobile from "../components/images/phitMobile.jpg";
import acropolisMobile from "../components/images/acropolisMobile.jpg";
import phitWeb from "../components/images/phit.jpg";
import acropolisWeb from "../components/images/acropolis.jpg";
import darkSkyGreens from "../components/images/greens.jpg";

class Work extends React.Component {
  state = {
    isClicked: [false, false, false],
    isSmall: [false, false, false],
    cardEnlarged: false
  };

  clickCard = index => {
    let newIsClicked = [false, false, false];
    let newIsSmall = [true, true, true];

    newIsClicked[index] = true;
    newIsSmall[index] = false;

    this.setState({
      isClicked: newIsClicked,
      isSmall: newIsSmall,
      cardEnlarged: true
    });
  };

  resetCards = () => {
    if (this.state.cardEnlarged) {
      let newIsClicked = [false, false, false];
      let newIsSmall = [false, false, false];
      this.setState({
        isClicked: newIsClicked,
        isSmall: newIsSmall,
        cardEnlarged: false
      });
    }
  };

  render() {
    return (
      <Fragment>
        <div className="wrapWork">
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
                resetCards={this.resetCards}
                cardBackground={this.state.isClicked[0] ? phitWeb : phitMobile}
                mobileCard={phitMobile}
                isClicked={this.state.isClicked[0]}
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
                resetCards={this.resetCards}
                cardBackground={
                  this.state.isClicked[1] ? acropolisWeb : acropolisMobile
                }
                mobileCard={acropolisMobile}
                webCard={acropolisWeb}
                index={1}
                isClicked={this.state.isClicked[1]}
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
                resetCards={this.resetCards}
                cardBackground={
                  this.state.isClicked[1] ? darkSkyGreens : darkSkyGreens
                }
                index={2}
                mobileCard={darkSkyGreens}
                webCard={darkSkyGreens}
                isClicked={this.state.isClicked[2]}
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
