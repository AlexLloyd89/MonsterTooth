import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
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

      <Footer />
    </BrowserRouter>
  );
}

export default App;
