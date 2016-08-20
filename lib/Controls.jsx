import React from 'react';
import ReactDOM from 'react-dom';

import { Button, ButtonToolbar, FormControl, Form } from 'react-bootstrap';
import { connect } from 'react-redux';
import { getControlStyle } from './StyleHelpers';

const mapStateToProps = (state) => {
  return {
    checkerLocation: state.checkerLocation,
    gameMode: state.gameMode,
    numSquares: state.numSquares,
    squareSize: state.squareSize
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    resetBoard: () => {
      dispatch({
        type: 'RESET_BOARD'
      });
    },
    startGame: () => {
      dispatch({
        type: 'START_GAME'
      });
    },
    stopGame: () => {
      dispatch({
        type: 'STOP_GAME'
      });
    },
    updateNumSquares: (control) => {
      let node = ReactDOM.findDOMNode(control);
      let num = node.value;
      node.value = '';

      dispatch({
        numSquares: num,
        type: 'UPDATE_NUM_SQUARES'
      });
    }
  };
};

export class Controls extends React.Component {
  render() {
    let {
      checkerLocation,
      gameMode,
      numSquares,
      resetBoard,
      squareSize,
      startGame,
      stopGame,
      updateNumSquares
    } = this.props;

    return (
      <ButtonToolbar style={getControlStyle(numSquares, squareSize)}>
        <Button bsStyle='success' disabled={gameMode === 'STARTED' || checkerLocation === -1}
          onClick={() => startGame()}>Play</Button>
        <Button bsStyle='danger' disabled={gameMode === 'STOPPED'} onClick={() => stopGame()}>Stop</Button>
        <Button bsStyle='primary' disabled={gameMode === 'STARTED'} onClick={() => resetBoard()}>Reset</Button>
        <Form className='inline-form'>
          <FormControl type='text' ref={(ref) => this.numSquares = ref} className='squares-input' />
        </Form>
        <Button disabled={gameMode === 'STARTED'}
          onClick={() => updateNumSquares(this.numSquares)}>Set Size</Button>
      </ButtonToolbar>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Controls);
