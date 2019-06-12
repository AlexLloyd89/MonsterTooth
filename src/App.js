import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Contact from "./pages/Contact";
import About from "./pages/About";

function App() {
  return (
    <Fragment>
      <div
        style={{
          background: "rgb(49, 49, 49)",
          marginBottom: 150,
          margin: 0,
          boxShadow: "0px 3px 6px 1px #000000b3"
        }}
      >
        {/* <Header /> */}
        <div className="wrap">
          <Landing />
        </div>

        <div className="wrap2">
          <Work />
        </div>

        <div className="wrap3">
          <About />
        </div>

        <div className="wrap4">
          <Contact />
        </div>

        <div className="chevron">
          <FontAwesomeIcon icon={faChevronDown} size="5x" />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;
