import React, { Fragment } from "react";
import WorkCard from "../components/WorkCard";
import "./work.css";
import phitMobile from "../components/images/phitMobile.jpg";
import acropolisMobile from "../components/images/acropolisMobile.jpg";
import phitWeb from "../components/images/phit.jpg";
import acropolisWeb from "../components/images/acropolis.jpg";
import darkSkyGreens from "../components/images/greens.jpg";
import darkSkyGreensMobile from "../components/images/greensMobile.jpg";
import AnchorLink from "react-anchor-link-smooth-scroll";

let x = window.matchMedia("(max-width: 800px)");

function backgroundResponsive() {
  return x.matches;
}

class Work extends React.Component {
  state = {
    isClicked: [false, false, false],
    isSmall: [false, false, false],
    cardEnlarged: false
  };

  componentDidMount() {
    x.addListener(backgroundResponsive);
    this.setState({ mobile: backgroundResponsive() });
  }

  clickCard = index => {
    let newIsClicked = [false, false, false];
    let newIsSmall = [true, true, true];

    newIsClicked[index] = true;
    newIsSmall[index] = false;

    this.setState(
      {
        isClicked: newIsClicked,
        isSmall: newIsSmall,
        cardEnlarged: true
      },
      () => {
        this.props.updateBodyHeight(580);
      }
    );
  };

  resetCards = () => {
    if (this.state.cardEnlarged) {
      let newIsClicked = [false, false, false];
      let newIsSmall = [false, false, false];
      this.setState(
        {
          isClicked: newIsClicked,
          isSmall: newIsSmall,
          cardEnlarged: false
        },
        () => {
          this.props.updateBodyHeight(-580);
        }
      );
    }
  };

  render() {
    return (
      <Fragment>
        <div id="work" className="wrapWork">
          <div
            style={{
              maxWidth: 1170,
              margin: "0 auto",
              paddingBottom: 75,
              zIndex: 10,
              position: "relative"
            }}
          >
            <h1
              className="workHeader"
              style={{ textShadow: "2px 3px 3px #242525" }}
            >
              What We've Built
            </h1>

            <div id="workCardContainer">
              <AnchorLink href={this.state.mobile ? "" : "#workCardContainer"}>
                <WorkCard
                  isMobile={this.state.mobile}
                  resetCards={this.resetCards}
                  cardBackground={
                    this.state.isClicked[0] ? phitWeb : phitMobile
                  }
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
                  cardTitle="Phit"
                  designHeader="What Is Phit?"
                  designText="Phit is a fitness tracking app desigined with customization and ease of use in mind. No more scrolling through endless menus in order to log or save your favorite meals and workouts. Phit's purpose is to make it as easy as possible for you to track your own personal fitness journey"
                  developHeader="What Did We Do?"
                  developText="User interface/experience, protoyping, layout, database design, deployment. We took Phit from inital concept to completion. We are currently in the process of migrating Phit to a new host, so it may take a minute to start up"
                />
              </AnchorLink>
              <AnchorLink href={this.state.mobile ? "" : "#workCardContainer"}>
                <WorkCard
                  isMobile={this.state.mobile}
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
                  cardTitle="Acropolis Engineering"
                  designHeader="What Is Acropolis Engineering?"
                  designText="Acropolis Engineering is a small, local, RTP based engineering firm."
                  developHeader="What Did We Do?"
                  developText="User interface/experience, layout, re-design. We completely re-designed and modernized AE's old website to the current sleek and mobile friendly site you see now"
                />
              </AnchorLink>
              <AnchorLink href={this.state.mobile ? "" : "#workCardContainer"}>
                <WorkCard
                  isMobile={this.state.mobile}
                  resetCards={this.resetCards}
                  cardBackground={
                    this.state.isClicked[2]
                      ? darkSkyGreens
                      : darkSkyGreensMobile
                  }
                  index={2}
                  mobileCard={darkSkyGreensMobile}
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
                  cardTitle="Dark Sky Greens"
                  designHeader="What Is Dark Sky Greens"
                  designText="Dark Sky Greens sells locally grown microgreens to individuals and small businesses."
                  developHeader="What We are currently Working On"
                  developText="Under construction!"
                />
              </AnchorLink>
            </div>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default Work;
