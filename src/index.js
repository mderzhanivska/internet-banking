import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import configureStore from './redux';

import 'semantic-ui-css/semantic.min.css';
import 'styles/index.module.scss';

import App from './Routes';

const initialState = window.REDUX_INITIAL_STATE || {};

const browserHistory = createHistory();
const store = configureStore(initialState, browserHistory);

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter history={browserHistory}>
      <App />
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// for library
export * from 'components';
