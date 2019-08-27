import React, { Component } from "react";
import "./Loading.css";

export class Loading extends Component {
  render() {
    return (
      <div id="loading">
        <img src="./images/loadgif.gif"></img>
      </div>
    );
  }
}

export default Loading;
