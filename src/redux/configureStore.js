import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  rockets,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
