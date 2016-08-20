import React from 'react'
import renderIf from 'render-if';

import { checkerOffBoard, checkerHasLooped } from './GameHelpers';
import { getBoardStyle, getCheckerStyle } from './StyleHelpers';
import { connect } from 'react-redux';
import { debounce } from 'underscore';

const mapStateToProps = (state) => {
  return {
    checkerLocation: state.checkerLocation,
    gameMode: state.gameMode,
    numSquares: state.numSquares,
    squareSize: state.squareSize,
    squares: state.squares
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    moveChecker: () => {
      dispatch({
        type: 'MOVE_CHECKER'
      });
    },
    placeChecker: (id) => {
      dispatch({
        squareId: id,
        type: 'PLACE_CHECKER'
      });
    }
  };
};

export class Board extends React.Component {
  componentDidUpdate() {
    let { checkerLocation, gameMode, moveChecker } = this.props;

    if(checkerLocation !== -1 && gameMode === 'STARTED') {
      debounce(moveChecker, 300)();
    }
  }

  render() {
    let { checkerLocation, gameMode, numSquares, placeChecker, squareSize, squares } = this.props;
    let square_divs = [];

    squares.map((square, index) => {
      let style = {
        backgroundColor: square.color,
        height: squareSize,
        width: squareSize
      };

      square_divs.push(
        <div key={square.id} className='square' style={style} onClick={() => placeChecker(square.id)}>
          <img className={`arrow ${square.direction}`} src='./assets/images/arrow.svg' />
        </div>
      );
    });

    return (
      <div style={getBoardStyle(numSquares, squareSize)}>
        <img className='checker'
          style={getCheckerStyle(checkerLocation, numSquares, squareSize)}
          src='./assets/images/checker.svg' />
        {square_divs}
      </div>
    );
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Board);
