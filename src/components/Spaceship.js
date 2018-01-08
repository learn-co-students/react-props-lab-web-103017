// Code The Spaceship Component Here

import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1> name = {this.props.name} </h1>
        <h2> speed = {this.props.speed} </h2>
        <h3> has rockets = {this.props.hasRockets} </h3>
        <h4> colors = {this.props.colors} </h4>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ["black", "red"]
}

export default Spaceship
