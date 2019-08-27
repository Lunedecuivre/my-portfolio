import React, { Component } from "react";
import Projet1 from "./Projet1";
import Projet2 from "./Projet2";
import Projet3 from "./Projet3";
import Loading from "./Loading";
import Carousel from "nuka-carousel";
export class Projects extends Component {
  state = { isLoading: true };

  componentDidMount() {
    this.setState({ isLoading: false });
  }

  render() {
    if (this.state.isLoading) {
      return <Loading />;
    }
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
