import { applyMiddleware, createStore } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';

import rootReducer from '../reducers';

export default function(initialState = {}, browserHistory) {
  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(
      thunk,
      createLogger({
        collapsed: true
      }),
      routerMiddleware(browserHistory)
    )
  );

  if (module.hot) {
    module.hot.accept('../reducers', () => store.replaceReducer(rootReducer));
  }

  return store;
}
