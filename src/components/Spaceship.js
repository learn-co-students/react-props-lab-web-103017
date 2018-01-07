// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return (
      <div>
        name = {this.props.name}
        speed = {this.props.speed}
        hasRockets = {this.props.hasRockets}
        colors = {this.props.colors}
      </div>
    );
  }
}

Spaceship.defaultProps = {
  name: "Millennium Falcon",
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
