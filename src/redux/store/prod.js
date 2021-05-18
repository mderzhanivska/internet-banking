import { applyMiddleware, createStore } from 'redux';
import { routerMiddleware } from 'react-router-redux';
import thunk from 'redux-thunk';

import rootReducer from '../reducers';

export default function(initialState = {}, browserHistory) {
  return createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, routerMiddleware(browserHistory))
  );
}
