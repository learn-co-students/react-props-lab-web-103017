import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

ReactDOM.render(
  <Spaceship name="Millennium Falcon"
    speed= {50}
    hasRockets= {true}
    colors = {['green','black']} />,
  document.getElementById('global')
);
