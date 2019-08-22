import React from "react";
import "./aboutme.css";
import { Link } from "react-router-dom";
import pdf from "./cv.pdf";

function Aboutme() {
  return (
    <div>
      <h1 className="aboutme">about me</h1>
      <h3 className="titre">cv</h3>
      <img id="cv" src="images/cv.png" alt="" />
      <div className="homebar">
        <a id="home" href="/">
          home ->{" "}
        </a>
        <img id="logoaboutme" src="images/logo.png" alt="" />
      </div>

      <img id="photoaboutme" src="images/aboutme.png" alt="" />
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
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
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
      </a>
    </div>
  );
}

export default Aboutme;
