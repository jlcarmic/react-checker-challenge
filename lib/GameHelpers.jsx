const calculateNextSquare = (current, direction, squares) => {
  switch(direction) {
    case 'UP':
      return current - squares;
    case 'DOWN':
      return current + squares;
    case 'LEFT':
      return current - 1;
    case 'RIGHT':
      return current + 1;
    default:
      return current;
  }
};

const checkerHasLooped = (checker, visited) => {
  return (visited.indexOf(checker) > -1);
};

const checkerOffBoard = (current, squares, direction) => {
  let column = current % squares;
  let row = Math.floor(current / squares);
  let max = squares - 1;

  switch(direction) {
    case 'UP':
      return row === 0 ? true : false;
    case 'DOWN':
      return row === max ? true : false;
    case 'LEFT':
      return column === 0 ? true : false;
    case 'RIGHT':
      return column === max ? true : false;
    default:
      return true;
  }
};

const getRandomDirection = () => {
  let randIndex = Math.floor(Math.random() * 4) + 1;

  switch(randIndex) {
    case 1:
      return 'UP';
    case 2:
      return 'DOWN';
    case 3:
      return 'LEFT';
    case 4:
      return 'RIGHT';
    default:
      return 'UP';
  }
};

const generateSquares = (num) => {
  let squares = [];
  let total = num * num;

  for(let i = 0; i < total; i++) {
    let color = i % 2 == 0 ? '#1B2534': '#F9FBFD';
    squares.push({ id: i, color: color, direction: getRandomDirection() });
  }

  return squares;
};

const instructionStrings = {
  initialState: 'Place the checker by clicking on a square.',
  hasLooped: 'The checker entered a loop. Dizzy checker!',
  inProgress: 'And away we go!',
  numSquaresError: 'Size must be an odd number to draw a proper board.',
  offBoard: 'The checker ran off the board. Silly checker!',
  readyState: 'Press play to move the checker along its path.'
};

const processCheckerMove = (squares, checkerLocation, numSquares, visited) => {
  console.log('called');
  let direction = squares[checkerLocation].direction;
  let nextSquare = calculateNextSquare(checkerLocation, direction, numSquares);

  if(checkerOffBoard(checkerLocation, numSquares, direction)) {
    return {
      checkerLocation: checkerLocation,
      currentInstruction: instructionStrings['offBoard'],
      gameMode: 'STOPPED',
      visited: visited
    };
  }

  if(checkerHasLooped(nextSquare, visited)) {
    return {
      checkerLocation: checkerLocation,
      currentInstruction: instructionStrings['hasLooped'],
      gameMode: 'STOPPED',
      visited: visited
    };
  }

  visited.push(checkerLocation);

  return {
    checkerLocation: nextSquare,
    currentInstruction: instructionStrings['inProgress'],
    gameMode: 'STARTED',
    visited: visited
  };
};

module.exports = {
  calculateNextSquare,
  checkerHasLooped,
  checkerOffBoard,
  generateSquares,
  getRandomDirection,
  instructionStrings,
  processCheckerMove
};
