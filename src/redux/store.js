import { createStore, applyMiddleware, combineReducers } from 'redux';
import logger from 'redux-logger';
import thunk from 'redux-thunk';

// import reducers here
import rocketsReducer from './rockets/rocketsReducer';

const mixReducer = combineReducers({
  // add reducers here
  rockets: rocketsReducer,
});

const store = createStore(
  mixReducer,
  applyMiddleware(logger, thunk),
);

export default store;
