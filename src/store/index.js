'use strict';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from '../reducers';

const logger = createLogger();
const middleware = [thunk, logger];

const createAppStore = () => {
  const store = createStore(
    rootReducer,
    composeWithDevTools(
      applyMiddleware(...middleware)
    )
  );
  return store;
};

export default createAppStore;