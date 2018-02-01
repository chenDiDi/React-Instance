/**
 * Created by didi on 2017.01.26
 **/

import { createStore, applyMiddleware, combineReducers } from 'redux';
import { createLogger } from 'redux-logger';

// const loggerMiddleware = createLogger(); // initialize logger
const createStoreWithMiddleware = applyMiddleware()(createStore); // apply logger to redux
// const createStoreWithMiddleware = applyMiddleware(loggerMiddleware)(createStore); // apply logger to redux

import toDoApp from './modules/toDoApp';

const reducer = combineReducers({
    toDoApp
});

const configureStore = (initialState) => createStoreWithMiddleware(reducer, initialState);
export default configureStore;