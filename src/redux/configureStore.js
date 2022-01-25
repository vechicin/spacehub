import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import missions from './missions/missions';

const reducer = combineReducers({
  missions,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
