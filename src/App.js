import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";
import AnchorLink from "react-anchor-link-smooth-scroll";

class App extends React.Component {
  state = {
    nextPosition: "#work",
    bodyHeight: "null"
  };

  handleScroll = () => {
    let scroll = window.scrollY;
    if (scroll >= 0.93 * this.state.bodyHeight) {
      this.setState({ nextPosition: "#landing" });
    } else if (scroll >= 0.7 * this.state.bodyHeight) {
      this.setState({ nextPosition: "#footer" });
    } else if (scroll >= 0.45 * this.state.bodyHeight) {
      this.setState({ nextPosition: "#contact" });
    } else if (scroll > 0.28 * this.state.bodyHeight) {
      this.setState({ nextPosition: "#about" });
    } else if (scroll < 0.3 * this.state.bodyHeight) {
      this.setState({ nextPosition: "#work" });
    }
  };

  updateBodyHeight = addHeight => {
    this.setState({
      bodyHeight:
        window.document.body.offsetHeight - window.innerHeight + addHeight
    });
  };

  componentDidMount() {
    this.updateBodyHeight(0);
    window.addEventListener("scroll", this.handleScroll);
  }

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
          </div>

          <div id="wrap2">
            <Work updateBodyHeight={this.updateBodyHeight} />
          </div>

          <div id="wrap3">
            <About />
          </div>

          <div id="wrap4">
            <Contact />
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
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default App;
