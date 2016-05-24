import {createStore} from 'redux';
import reducer from '../reducers/index.js';

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('../reducers', () => {
      const nextReducer = require('../reducers').default;
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
