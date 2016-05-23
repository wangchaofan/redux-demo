import {createStore} from 'redux';
import reducer from '../reducers/todos.js';

const store = createStore(reducer);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}