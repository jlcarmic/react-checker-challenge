import { Board } from '../lib/Board';
import expect from 'expect';
import expectReactShallow from 'expect-react-shallow';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Board', () => {
  it('renders the board with the appropriate squares', () => {
    const squares = [
      { id: 0, color: '#1B2534', direction: 'UP' },
      { id: 1, color: '#F9FBFD', direction: 'DOWN' },
      { id: 2, color: '#1B2534', direction: 'LEFT' },
      { id: 3, color: '#F9FBFD', direction: 'RIGHT' },
    ];

    expectReactShallow(<Board squares={squares} />).to.contain(<img className='checker' />);
    expectReactShallow(<Board squares={squares} />).to.contain(<img className='arrow UP' />);
    expectReactShallow(<Board squares={squares} />).to.contain(<img className='arrow DOWN' />);
    expectReactShallow(<Board squares={squares} />).to.contain(<img className='arrow LEFT' />);
    expectReactShallow(<Board squares={squares} />).to.contain(<img className='arrow RIGHT' />);
  });
});
