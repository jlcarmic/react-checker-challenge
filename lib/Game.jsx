import Board from './Board';
import Controls from './Controls';
import Instructions from './Instructions';
import React from 'react';

import { connect } from 'react-redux';

export class Game extends React.Component {
  render() {
    return (
      <div>
        <Instructions />
        <Board />
        <Controls />
      </div>
    );
  }
}

export default connect()(Game);
