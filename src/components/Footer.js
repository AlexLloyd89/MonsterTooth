import React, { Component } from "react";
import Logo from "../components/images/logo.png";
import Bounce from "react-reveal/Bounce";

export default class Footer extends Component {
  state = {
    showSnaggle: false
  };

  mouseEnter = () => {
    this.setState({ showSnaggle: true });
    alert("hi");
  };

  mouseLeave = () => {
    this.setState({ showSnaggle: false });
  };
  render() {
    return (
      <footer
        style={{
          position: "fixed",
          bottom: 0,
          height: 200,
          width: "100%",
          zIndex: -99,
          background: "purple"
        }}
        onMouseOver={this.mouseEnter}
        onMouseLeave={this.mouseLeave}
      >
        {this.state.showSnaggle ? (
          <Bounce top>
            <img src={Logo} style={{ position: "fixed" }} />
          </Bounce>
        ) : null}
        <img src={Logo} style={{ position: "fixed" }} />I am the footer
        <div>
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
        </div>
      </footer>
    );
  }
}
