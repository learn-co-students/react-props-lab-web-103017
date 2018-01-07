import React from 'react';
import ReactDOM from 'react-dom';

class Spaceship extends React.Component {
  render() {
    return(
      <div>
        Spaceship name={this.props.name}
        Spaceship speed={this.props.speed}
        Spaceship hasRockets={this.props.hasRockets}
        Spaceship colors={this.props.colors}
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship;
