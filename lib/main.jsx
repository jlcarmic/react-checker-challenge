import Game from './Game';
import GameReducer from './GameReducer';
import React from 'react';

import { createStore } from 'redux';
import { render } from 'react-dom';
import { Provider } from 'react-redux';

let store = createStore(GameReducer);

render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById('content')
);
