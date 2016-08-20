import Board from '../lib/Board';
import Controls from '../lib/Controls';
import expect from 'expect';
import expectJSX from 'expect-jsx';
import Game from '../lib/Game';
import GameReducer from '../lib/GameReducer';
import Instructions from '../lib/Instructions';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

import { Provider } from 'react-redux';
import { createStore } from 'redux';

expect.extend(expectJSX);

describe('Game', () => {
  let store = createStore(GameReducer);
  const renderer = TestUtils.createRenderer();
  renderer.render(
    <Provider store={store}>
      <Game />
    </Provider>
  );

  it('renders the three primary components', () => {
    const actual = renderer.getRenderOutput();

    expect(actual).toIncludeJSX(<Instructions />);
    expect(actual).toIncludeJSX(<Board />);
    expect(actual).toIncludeJSX(<Controls />);
  });
});
