import {
  calculateNextSquare,
  checkerOffBoard,
  checkerHasLooped,
  generateSquares,
  instructionStrings,
  processCheckerMove
} from './GameHelpers';

const defaultState = {
  checkerLocation: -1,
  currentInstruction: instructionStrings['initialState'],
  gameMode: 'STOPPED',
  numSquares: 5,
  squares: generateSquares(5),
  squareSize: 75,
  visited: []
};

const GameReducer = (state = defaultState, action) => {
  switch(action.type) {
    case 'MOVE_CHECKER':
      let newState = processCheckerMove(state.squares, state.checkerLocation, state.numSquares, state.visited);

      return {
        ...state,
        checkerLocation: newState.checkerLocation,
        currentInstruction: newState.currentInstruction,
        gameMode: newState.gameMode,
        visited: newState.visited
      }
    case 'PLACE_CHECKER':
      if(state.gameMode === 'STOPPED') {
        return {
          ...state,
          currentInstruction: instructionStrings['readyState'],
          checkerLocation: action.squareId,
        };
      } else {
        return state;
      };
    case 'RESET_BOARD':
      return {
        ...state,
        checkerLocation: -1,
        currentInstruction: instructionStrings['initialState'],
        numSquares: defaultState.numSquares,
        squares: generateSquares(defaultState.numSquares),
        visited: []
      };
    case 'START_GAME':
      return {
        ...state,
        currentInstruction: instructionStrings['inProgress'],
        gameMode: 'STARTED',
        visited: []
      };
    case 'STOP_GAME':
      return {
        ...state,
        currentInstruction: instructionStrings['readyState'],
        gameMode: 'STOPPED'
      };
    case 'UPDATE_NUM_SQUARES':
      let num = parseInt(action.numSquares);

      if(num % 2 === 1) {
        return {
          ...state,
          checkerLocation: -1,
          currentInstruction: instructionStrings['initialState'],
          numSquares: num,
          squares: generateSquares(num),
        };
      } else {
        return {
          ...state,
          currentInstruction: instructionStrings['numSquaresError']
        };
      }
    default:
      return state;
  }
}

export default GameReducer;
