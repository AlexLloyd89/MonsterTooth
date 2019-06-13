import React, { Component } from "react";
import Logo from "../components/images/logo.png";
import "./Footer.css";

export default class Footer extends Component {
  render() {
    return (
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          height: 200,
          width: "100%",
          background: "#9de4d7",
          display: "flex",
          alignItems: "flex-end"
        }}
      >
        <img
          src={Logo}
          style={{
            transform: "rotate(161deg)",
            position: "fixed",
            bottom: "11%",
            left: "9%",
            width: "6%"
          }}
        />
        <div className="footWrap">
          <div className="footContent">
            <div className="credits">
              <div className="creditHeader">
                <h1 style={{ fontSize: 30 }}>Credits</h1>
              </div>
              <p style={{ width: "250px" }}>
                Icons made by{" "}
                <a
                  href="https://www.flaticon.com/<?=_('authors').'/'?>surang"
                  title="surang"
                >
                  surang
                </a>{" "}
                from{" "}
                <a href="https://www.flaticon.com/" title="Flaticon">
                  www.flaticon.com
                </a>{" "}
                is licensed by{" "}
                <a
                  href="http://creativecommons.org/licenses/by/3.0/"
                  title="Creative Commons BY 3.0"
                  target="_blank"
                >
                  CC 3.0 BY
                </a>
              </p>
            </div>

            <div className="contactInformation">
              <div className="contactHeader">
                <h1 style={{ fontSize: 30 }}>Seriously, Say Hey</h1>
              </div>
              <div className="contactLinks">
                <p>
                  <a href="mailto:hello@monstertooth.tech">Email</a>
                </p>
                <p>
                  <a href="https://www.linkedin.com/company/monster-tooth/about/">
                    LinkedIn
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div style={{ textAlign: "center" }}>
            &copy; {new Date().getFullYear()} Monster Tooth
          </div>
        </div>
      </footer>
    );
  }
}
