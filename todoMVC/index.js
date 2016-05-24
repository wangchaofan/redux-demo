var initialState = [
	{
		id: 0,
		text: '123',
		completed: false
	}, {
		id: 1,
		text: 'my thing',
		completed: true
	}, {
		id: 2,
		text: 'do fishing',
		completed: false
	}
];

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import App from './containers/App.js';
import configureStore from './store/configureStore.js';
import './style.css';

const store = configureStore({todos: initialState});

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
