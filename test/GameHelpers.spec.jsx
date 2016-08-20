import expect from 'expect'
import {
  calculateNextSquare,
  checkerHasLooped,
  checkerOffBoard,
  generateSquares,
  getRandomDirection,
  instructionStrings,
  processCheckerMove
} from '../lib/GameHelpers';

describe('calculateNextSquare', () => {
  it("returns an ID that is numSquares less than the current square's ID when the direction is UP", () => {
    let nextSquare = calculateNextSquare(10, 'UP', 5);

    expect(nextSquare).toEqual(5);
  });

  it("returns an ID that is numSquares more than the current square's ID when the direction is DOWN", () => {
    let nextSquare = calculateNextSquare(10, 'DOWN', 5);

    expect(nextSquare).toEqual(15);
  });

  it("returns an ID that is 1 less than the current square's ID when the direction is LEFT", () => {
    let nextSquare = calculateNextSquare(10, 'LEFT', 5);

    expect(nextSquare).toEqual(9);
  });

  it("returns an ID that is 1 more than the current square's ID when the direction is RIGHT", () => {
    let nextSquare = calculateNextSquare(10, 'RIGHT', 5);

    expect(nextSquare).toEqual(11);
  });
});

describe('checkerHasLooped', () => {
  it('returns true when the nextSquare is in the visited list', () => {
    let result = checkerHasLooped(1, [1,2,3]);

    expect(result).toEqual(true);
  });

  it('returns false when the nextSquare is not in the visited list', () => {
    let result = checkerHasLooped(4, [1,2,3]);

    expect(result).toEqual(false);
  });
});

describe('checkerOffBoard', () => {
  it('returns true when moving UP would put the checker off the board', () => {
    let result = checkerOffBoard(2, 5, 'UP');

    expect(result).toEqual(true);
  });

  it('returns false when moving UP does not put the checker off the board', () => {
    let result = checkerOffBoard(12, 5, 'UP');

    expect(result).toEqual(false);
  });

  it('returns true when moving DOWN would put the checker off the board', () => {
    let result = checkerOffBoard(24, 5, 'DOWN');

    expect(result).toEqual(true);
  });

  it('returns false when moving DOWN does not put the checker off the board', () => {
    let result = checkerOffBoard(12, 5, 'DOWN');

    expect(result).toEqual(false);
  });

  it('returns true when moving LEFT would put the checker off the board', () => {
    let result = checkerOffBoard(0, 5, 'LEFT');

    expect(result).toEqual(true);
  });

  it('returns false when moving LEFT does not put the checker off the board', () => {
    let result = checkerOffBoard(1, 5, 'LEFT');

    expect(result).toEqual(false);
  });

  it('returns true when moving RIGHT would put the checker off the board', () => {
    let result = checkerOffBoard(24, 5, 'RIGHT');

    expect(result).toEqual(true);
  });

  it('returns false when moving RIGHT does not put the checker off the board', () => {
    let result = checkerOffBoard(23, 5, 'RIGHT');

    expect(result).toEqual(false);
  });
});

describe('generateSquares', () => {
  it('retuns an array of valid square objects', () => {
    let squares = generateSquares(2);

    // Expect a 2x2 board of squares
    expect(squares.length).toEqual(4);

    // Expect colors to alternate
    expect(squares[0].color).toEqual('#1B2534');
    expect(squares[1].color).toEqual('#F9FBFD');

    // Expect squares to have unique IDs
    expect(squares[0].id).toNotEqual(squares[1].id);

    // Expect squares to have valid direction
    expect(['UP', 'DOWN', 'LEFT', 'RIGHT']).toInclude(squares[0].direction);
  });
});

describe('getRandomDirection', () => {
  it('returns a valid direction', () => {
    let direction = getRandomDirection();

    expect(['UP', 'DOWN', 'LEFT', 'RIGHT']).toInclude(direction);
  });
});

describe('processCheckerMove', () => {
  var squares;

  before(() => {
    squares = [
      { id: 0, color: '#1B2534', direction: 'LEFT' },
      { id: 1, color: '#F9FBFD', direction: 'DOWN' },
      { id: 2, color: '#1B2534', direction: 'UP' },
      { id: 3, color: '#F9FBFD', direction: 'UP' },
    ];
  });

  it('returns the new valid state when the checker move is valid', () => {
    let newstate = processCheckerMove(squares, 2, 2, []);
    let expected = {
      checkerLocation: 0,
      currentInstruction: instructionStrings['inProgress'],
      gameMode: 'STARTED',
      visited: [2]
    };

    expect(newstate).toEqual(expected);
  });

  it('returns the new state representing end of game when the checker move is off board', () => {
    let newstate = processCheckerMove(squares, 0, 2, []);
    let expected = {
      checkerLocation: 0,
      currentInstruction: instructionStrings['offBoard'],
      gameMode: 'STOPPED',
      visited: []
    };

    expect(newstate).toEqual(expected);
  });

  it('returns the new state representing end of game when the checker move creates a loop', () => {
    let newstate = processCheckerMove(squares, 3, 2, [1]);
    let expected = {
      checkerLocation: 3,
      currentInstruction: instructionStrings['hasLooped'],
      gameMode: 'STOPPED',
      visited: [1]
    };

    expect(newstate).toEqual(expected);
  });
});
