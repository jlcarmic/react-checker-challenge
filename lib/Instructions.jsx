import React from 'react';

import { getInstructionsStyle } from './StyleHelpers';
import { connect } from 'react-redux';

const mapStateToProps = (state) => {
  return {
    currentInstruction: state.currentInstruction,
    numSquares: state.numSquares,
    squareSize: state.squareSize
  };
};

export class Instructions extends React.Component {
  render() {
    let { currentInstruction, numSquares, squareSize } = this.props;

    return (
      <div style={getInstructionsStyle(numSquares, squareSize)}>
        {currentInstruction}
      </div>
    );
  }
}

export default connect(mapStateToProps)(Instructions);
