import React, { Fragment } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <Fragment>
      <div
        style={{
          background: "#f5f5f5",
          marginBottom: 150,
          margin: 0,
          boxShadow: "0px 3px 6px 1px #000000b3"
        }}
      >
        <Header />
        <div className="wrap">
          <Landing />
        </div>
        <Work />
        <Contact />
        <div className="chevron">
          <FontAwesomeIcon icon={faChevronDown} size="5x" />
        </div>
      </div>

      <Footer />
    </Fragment>
  );
}

export default App;
