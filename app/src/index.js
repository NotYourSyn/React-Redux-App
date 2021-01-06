import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from "redux-logger";
import thunk from "redux-thunk";

import App from './App';
import { appReducer } from './reducers';

// Step 1: create the store
const store = createStore(appReducer, applyMiddleware(logger, thunk));

const rootElement = document.getElementById('root');

// Step 2: provide the store
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootElement
);

