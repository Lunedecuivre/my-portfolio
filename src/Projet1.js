import React, { Component } from "react";
import "./projet.css";
import { Link } from "react-router-dom";

export class Projet1 extends Component {
  render() {
    return (
      <div id="projet1">
        <svg
          id="svgprojets"
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
        <img className="projet-image" src="../images/momentum.png" />
        <h3 className="slidenumber">1/3</h3>
        <h4 className="projet-github">github -></h4>
        <div className="mainprojet">
          <h1 className="socod">momentum</h1>
        </div>{" "}
        <div className="texte-projets">
          <p className="projet-p">
            Doggo ipsum lotsa pats many pats shoob clouds doggo smol borking
            doggo with a long snoot for pats, you are doing me a frighten doggo
            corgo. Long woofer length boy boofers length boy, what a nice floof.
            Heck pupper mlem the neighborhood pupper ur givin me a spook, pats
            pupperino smol. Puggo doggo shibe ur givin me a spook fluffer super
            chub, heckin vvv very good spot doggo borkdrive shoober, vvv h*ck
            big ol pupper heckin.
          </p>
          <ul className="projet-ul">
            <li>Technologies utilisées:</li>
            <li>Lorem</li>
            <li>Lorem</li>
            <li>Lorem</li>
          </ul>
        </div>
        <div className="home-container">
          <Link to="/">
            <img className="projet-logo" src="./images/logo.gif" />
          </Link>
          <h4 className="projet-h4">home</h4>
        </div>
      </div>
    );
  }
}

export default Projet1;
