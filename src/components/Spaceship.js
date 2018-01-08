// Code The Spaceship Component Here
import React from 'react';
import PropTypes from 'prop-types';



export default class Spaceship extends React.Component {
  render() {
    const { name, speed, hasRockets, colors } = this.props;
    return (


      <div>
        <h1>{name}</h1>
          <ul>
            <li>Speed: {speed}</li>
            <li>Has Rockets: {hasRockets}</li>
            <ul>Colors: {colors.map((color, index) => <li key={index}>{color}</li>)}
            </ul>
          </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}
