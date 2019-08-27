import React, { Component } from "react";
import "./index.css";
import { Link } from "react-router-dom";
import Loading from "./Loading";

export class Accueil extends Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
    return (
      <div>
        <div className="main">
          <span className="webdev">Hey. I'm Léna</span>
          <span className="socod">I'm a web developper.</span>
        </div>

        <Link id="aboutme" to="/aboutme">
          About me /
        </Link>
        <Link id="projets" to="/projects">
          Projets /
        </Link>
        <Link id="contact" to="/contact">
          Contact /
        </Link>
        <svg
          id="svg2"
          width="609"
          height="405"
          viewBox="0 0 609 405"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g filter="url(#filter0_f)">
            <path
              className="path2"
              d="M151 5H604V98M4 396C4 396 190.195 396 309.5 396M379.5 396C467.173 396 604 396 604 396V143.5"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
          <g filter="url(#filter1_d)">
            <path
              className="path2"
              d="M151 5H604V98M4 396C4 396 190.195 396 309.5 396M379.5 396C467.173 396 604 396 604 396V143.5"
              stroke="white"
              strokeWidth="1.5"
            />
          </g>
          <defs>
            <filter
              id="filter0_f"
              x="0"
              y="0.25"
              width="608.75"
              height="400.5"
              filterUnits="userSpaceOnUse"
              colorInterpolationFilters="sRGB"
            >
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feGaussianBlur
                stdDeviation="2"
                result="effect1_foregroundBlur"
              />
            </filter>
            <filter
              id="filter1_d"
              x="0"
              y="4.25"
              width="608.75"
              height="400.5"
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

        <img id="logo" src="/images/logo.png" alt="" />
        <img id="photo" src="/images/photoindex.png" alt="" />
      </div>
    );
  }
}

export default Accueil;
