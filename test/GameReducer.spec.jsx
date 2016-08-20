import expect from 'expect';
import GameReducer from '../lib/GameReducer';
import GameHelpers from '../lib/GameHelpers';
import sinon from 'sinon';

import { instructionStrings, generateSquares } from '../lib/GameHelpers';

describe('GameReducer', () => {
  const defaultState = {
    checkerLocation: -1,
    currentInstruction: instructionStrings['initialState'],
    gameMode: 'STOPPED',
    numSquares: 5,
    squares: generateSquares(5),
    squareSize: 75,
    visited: []
  };

  it('reverts the board back to default state when MOVE_CHECKER is dispatched', () => {
    const action = { type: 'MOVE_CHECKER' };
    const initialState = { ...defaultState, checkerLocation: 2 };
    const processMoveSpy = sinon.spy(GameHelpers, 'processCheckerMove');
    const result = GameReducer(initialState, action);

    expect(processMoveSpy.callCount).toEqual(1);

    processMoveSpy.restore();
  });

  it('places the checker on the board when the PLACE_CHECKER action is dispatched', () => {
    const action = { type: 'PLACE_CHECKER', squareId: 3 };
    const result = GameReducer(defaultState, action);

    expect(result.currentInstruction).toEqual(instructionStrings['readyState']);
    expect(result.checkerLocation).toEqual(3);
  });

  it('updates the game state to started when the START_GAME action is dispatched', () => {
    const action = { type: 'START_GAME' };
    const result = GameReducer(defaultState, action);

    expect(result.currentInstruction).toEqual(instructionStrings['inProgress']);
    expect(result.gameMode).toEqual('STARTED');
    expect(result.visited).toEqual([]);
  });

  it('updates the game state to stopped when the STOP_GAME action is dispatched', () => {
    const action = { type: 'STOP_GAME' };
    const result = GameReducer(defaultState, action);

    expect(result.currentInstruction).toEqual(instructionStrings['readyState']);
    expect(result.gameMode).toEqual('STOPPED');
  });

  it('updates the board when the UPDATE_NUM_SQUARES action is dispatched with an odd number', () => {
    const action = { type: 'UPDATE_NUM_SQUARES', numSquares: 3 };
    const result = GameReducer(defaultState, action);

    expect(result.checkerLocation).toEqual(-1);
    expect(result.currentInstruction).toEqual(instructionStrings['initialState']);
    expect(result.numSquares).toEqual(3);
    expect(result.squares.length).toEqual(9);
  });

  it('displays an error when the UPDATE_NUM_SQUARES action is dispatched with a non-odd number', () => {
    const action = { type: 'UPDATE_NUM_SQUARES', numSquares: 4 };
    const result = GameReducer(defaultState, action);

    expect(result.currentInstruction).toEqual(instructionStrings['numSquaresError']);
  });

  it('reverts the board back to default state when the RESET_BOARD action is dispatched', () => {
    const action = { type: 'RESET_BOARD' };
    const result = GameReducer(defaultState, action);

    expect(result.checkerLocation).toEqual(-1);
    expect(result.currentInstruction).toEqual(instructionStrings['initialState']);
    expect(result.gameMode).toEqual('STOPPED');
    expect(result.numSquares).toEqual(5);
    expect(result.squares.length).toEqual(25);
    expect(result.squareSize).toEqual(75);
    expect(result.visited).toEqual([]);
  });
});
