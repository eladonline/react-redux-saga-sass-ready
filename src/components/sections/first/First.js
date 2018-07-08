import React, { Component } from "react";

export default class FirstSection extends Component {
  render() {
    return (
      <div className="main-container">
        <div className="firstSection-spaceDiv" />
        <header id="sectionFirstHeader">
          <p>
            CRYPTOCURRENCY EXCHANGE <br />
          </p>
          <p>
            <span className="bigText">
              Trade Brighter. <br /> Invest in the <br /> Future of Finance
            </span>
          </p>
          <p>
            <span>
              Start creating a brighter investment future with <br />
              INX's secure and efficient platform
            </span>
            <span>
              <button className="startTrading btn-def">Start Trading</button>
            </span>
          </p>
        </header>
      </div>
    );
  }
}
