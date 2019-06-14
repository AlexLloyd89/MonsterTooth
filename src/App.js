import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AnchorLink from "react-anchor-link-smooth-scroll";
import VisibilitySensor from "react-visibility-sensor";

class App extends React.Component {
  state = {
    nextPosition: "#work",
    bodyHeight: "null"
  };

  handleLandingVisibility = isVisible => {
    if (isVisible) {
      this.setState({ nextPosition: "#work" });
    }
  };

  handleWorkVisibility = isVisible => {
    if (isVisible) {
      this.setState({ nextPosition: "#about" });
    }
  };

  handleAboutVisibility = isVisible => {
    if (isVisible) {
      this.setState({ nextPosition: "#contact" });
    }
  };

  handleContactVisibility = isVisible => {
    if (isVisible) {
      this.setState({ nextPosition: "#footer" });
    }
  };

  handleFooterVisibility = isVisible => {
    if (isVisible) {
      this.setState({ nextPosition: "#landing" });
    }
  };

  updateBodyHeight = addHeight => {
    this.setState({
      bodyHeight:
        window.document.body.offsetHeight - window.innerHeight + addHeight
    });
  };

  render() {
    return (
      <Fragment>
        <div
          style={{
            background: "rgb(49, 49, 49)",
            marginBottom: 150,
            margin: 0,
            boxShadow: "0px 3px 6px 1px #000000b3",
            zIndex: 10,
            position: "relative"
          }}
        >
          <div id="wrap">
            <Landing />
            <VisibilitySensor onChange={this.handleLandingVisibility}>
              <div style={{ height: 1, background: "#9de4d7" }} />
            </VisibilitySensor>
          </div>

          <div id="wrap2">
            <Work updateBodyHeight={this.updateBodyHeight} />
          </div>
          <VisibilitySensor onChange={this.handleWorkVisibility}>
            <div style={{ height: 1, background: "whitesmoke" }} />
          </VisibilitySensor>

          <div id="wrap3">
            <About />
          </div>
          <VisibilitySensor onChange={this.handleAboutVisibility}>
            <div style={{ height: 1, background: "whitesmoke" }} />
          </VisibilitySensor>

          <div id="wrap4">
            <Contact />
            <VisibilitySensor onChange={this.handleContactVisibility}>
              <div
                style={{
                  height: 1,
                  background: "#313131",
                  position: "absolute",
                  height: 11,
                  width: 11,
                  bottom: 276,
                  left: 40
                }}
              />
            </VisibilitySensor>
          </div>

          <div
            id="footer"
            className={
              this.state.nextPosition === "#landing" ? "chevronFlip" : "chevron"
            }
          >
            <AnchorLink href={this.state.nextPosition}>
              <FontAwesomeIcon
                icon={faChevronDown}
                size="5x"
                style={
                  this.state.nextPosition === "#landing"
                    ? { filter: "drop-shadow(-3px -3px 3px black)" }
                    : { filter: "drop-shadow(3px 3px 3px black)" }
                }
              />
            </AnchorLink>
          </div>
          <VisibilitySensor onChange={this.handleFooterVisibility}>
            <div style={{ height: 1, background: "#313131" }} />
          </VisibilitySensor>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
