import React from 'react';

export default class Spaceship extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <h1>Name: {this.props.name}</h1>
        <h2>Speed: {this.props.speed}</h2>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors} </p>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black','red']
};
