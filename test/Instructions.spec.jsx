import expect from 'expect';
import expectReactShallow from 'expect-react-shallow';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { Instructions } from '../lib/Instructions';
import { instructionStrings } from '../lib/GameHelpers';

describe('Instructions', () => {
  it('renders the instruction panel with the default instructions', () => {
    const actual = <Instructions currentInstruction={instructionStrings['initialState']} />
    const expected = <div>{instructionStrings['initialState']}</div>;
    expectReactShallow(actual).to.contain(expected);
  });
});
