import React, { Component } from "react";
import "./aboutme.css";
import { Link } from "react-router-dom";
import pdf from "./cv.pdf";
import "./index.css";
import Loading from "./Loading";
import Accueil from "./Accueil";

export class Aboutme extends Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div id="aboutme-container">
        <div className="mainaboutme">
          <h1 className="socod">about me</h1>
        </div>
        <p className="aboutme-p">
          Doggo ipsum lotsa pats many pats shoob clouds doggo smol borking doggo
          with a long snoot for pats, you are doing me a frighten doggo corgo.
          Long woofer length boy boofers length boy, what a nice floof. Heck
          pupper mlem the neighborhood pupper ur givin me a spook, pats
          pupperino smol. Puggo doggo shibe ur givin me a spook fluffer super
          chub, heckin vvv very good spot doggo borkdrive shoober, vvv h*ck big
          ol pupper heckin.
        </p>

        <h3 className="titre">cv</h3>
        <img id="cv" src="images/cv.png" alt="" />
        <div className="homebaraboutme">
          <Link to="/">
            <img className="projet-logo" src="./images/logo.gif" />
          </Link>{" "}
          <h3> home</h3>
        </div>

        {/* <img id="photoaboutme" src="images/aboutme.png" alt="" /> */}
        <svg
          id="svg3"
          width="478"
          height="539"
          viewBox="0 0 478 539"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_d)">
            <path
              className="path3"
              d="M5.50174 401.095V1.54703H116.184V0H4L4 401.095H5.50174Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              className="path3"
              d="M203.5 1.54703H472.498V199.167H474V0L203.5 0V1.54703Z"
              stroke="white"
              strokeWidth="1.5"
            />
            <path
              className="path3"
              d="M472.498 261.026V531H474V261.026H472.498Z"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_d"
              x="0"
              y="0"
              width="478"
              height="539"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
              />
              <feOffset dy="4" />
              <feGaussianBlur stdDeviation="2" />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.25 0"
              />
              <feBlend
                mode="lighten"
                in2="BackgroundImageFix"
                result="effect1_dropShadow"
              />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="effect1_dropShadow"
                result="shape"
              />
            </filter>
          </defs>
        </svg>
        <a id="cvlink" href={pdf}>
          Download my resume ->
          <img id="file" src="./images/file.gif" />
        </a>
      </div>
    );
  }
}

export default Aboutme;
