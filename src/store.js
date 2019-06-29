import {
  createStore, applyMiddleware, compose, combineReducers,
} from 'redux';
import authReducer from './reducers/authReducer';
import uiReducer from './reducers/uiReducer';
import creditReducer from './reducers/creditReducer';
import logger from './middlewares/logger';
import form from './middlewares/forms';
import api from './middlewares/api';
import auth from './middlewares/auth';
import apiCallEnhancer from './middlewares/apiCallEnhancer';
import bankerReducer from './reducers/bankerReducer';
import clientsReducer from './reducers/clientReducer';
import routeMiddleware from './middlewares/router';
import creditProposalsReducer from './reducers/creditPrposalReducer';

// Defining redux middleware
const middleware = [
  logger,
  auth,
  form,
  apiCallEnhancer,
  api,
  routeMiddleware,
];

// Creating app store
const store = createStore(
  combineReducers({
    ui: uiReducer,
    credits: creditReducer,
    bankers: bankerReducer,
    clients: clientsReducer,
    proposals: creditProposalsReducer,
    auth: authReducer,
  }),
  {},
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  ),
);

export default store;
