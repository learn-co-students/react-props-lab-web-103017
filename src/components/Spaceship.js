// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';


class Spaceship extends React.Component{
  render(){
    return (
      <div>
        <title> {this.props.name} </title>
        <p> {this.props.speed} </p>
        <p> {this.props.hasRockets} </p>
        <p> {this.props.colors.join(', ')} </p>
      </div>
    );
  };
};


Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: ['black', 'red']
}


export default Spaceship;
