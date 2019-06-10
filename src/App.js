import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Landing from "./pages/Landing";
import Work from "./pages/Work";
import Contact from "./pages/Contact";

function App() {
  return (
    <BrowserRouter>
      <div
        style={{
          background: "#f5f5f5",
          marginBottom: 150,
          margin: 0,
          boxShadow: "0px 3px 6px 1px #000000b3"
        }}
      >
        <div style={{ maxWidth: 1170, margin: "0 auto", paddingBottom: 75 }}>
          <Header />
          <Switch>
            <Route exact path="/" component={Landing} />
            <Work path="/work" component={Work} />
            <Contact path="/contact" component={Contact} />
          </Switch>
        </div>
      </div>
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          height: 200,
          width: "100%",
          zIndex: -99,
          background: "purple"
        }}
      >
        I am the footer
      </footer>
    </BrowserRouter>
  );
}

export default App;
