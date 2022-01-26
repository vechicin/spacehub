import { applyMiddleware, combineReducers, createStore } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import rocketsReducer from './rockets/rocketsReducer';

const reducer = combineReducers({
  rockets: rocketsReducer,
});

const store = createStore(reducer, applyMiddleware(logger, thunk));

export default store;
