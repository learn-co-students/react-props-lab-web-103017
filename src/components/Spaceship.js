// Code The Spaceship Component Here
import React from "react";

export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>;
        <p>{this.props.speed}</p>;
        <p>{this.props.hasRockets}</p>;
        <p>{this.props.colors}</p>;
      </div>
    );
  }
}

Spaceship.defaultProps = {
  name: null,
  speed: null,
  hasRocket: null,
  colors: null
};
