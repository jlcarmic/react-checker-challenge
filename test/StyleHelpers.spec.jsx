import expect from 'expect';

import {
  getBoardStyle,
  getCheckerStyle,
  getControlStyle,
  getInstructionsStyle
} from '../lib/StyleHelpers';

describe('getBoardStyle', () => {
  it('returns the styling for the board based on number and size of squares', () => {
    let expected = { height: 375, width: 375 };
    let result = getBoardStyle(5, 75);

    expect(result).toEqual(expected);
  });
});

describe('getCheckerStyle', () => {
  it('returns the styling of the checker when the checker has not been placed', () => {
    let expected = { display: 'none' };
    let result = getCheckerStyle(-1, 5, 75);

    expect(result).toEqual(expected);
  });

  it('returns the styling of the checker based on checker placement on a square', () => {
    let expected = { left: 240, top: 146 };
    let result = getCheckerStyle(8, 5, 75);

    expect(result).toEqual(expected);
  });
});

describe('getControlStyle', () => {
  it('returns the styling of the controls panel based on number and size of squares', () => {
    let expected = { margin: '8px 0', textAlign: 'center', width: 375 };
    let result = getControlStyle(5, 75);

    expect(result).toEqual(expected);
  });
});

describe('getInstructionsStyle', () => {
  it('returns the styling of the instructions panel based on the number and size of squares', () => {
    let expected = { fontSize: 16, fontWeight: 'bold', height: 40, margin: '8px 0', textAlign: 'center', width: 375 };
    let result = getInstructionsStyle(5, 75);

    expect(result).toEqual(expected);
  });
});
