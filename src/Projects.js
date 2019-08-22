import React, { Component } from "react";
import Carousel from "nuka-carousel";
import Projet1 from "./Projet1";
import Projet2 from "./Projet2";
import Projet3 from "./Projet3";

export class Projects extends Component {
  render() {
    return (
      <Carousel>
        <Projet1 />
        <Projet2 />
        <Projet3 />
      </Carousel>
    );
  }
}

export default Projects;
