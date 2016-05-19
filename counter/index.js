/*
* @Author: chaofan
* @Date:   2016-05-19 14:34:01
* @Last Modified by:   chaofan
* @Last Modified time: 2016-05-19 15:15:22
*/

'use strict';
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import Counter from './components/Counter';
import counter from './reducers';

const store = createStore(counter);
const rootEl = document.getElementById('root');

function render() {
  ReactDOM.render(
    <Counter
      value={store.getState()}
      onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
      onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
    />,
    rootEl
  );
}

render();
store.subscribe(render);
