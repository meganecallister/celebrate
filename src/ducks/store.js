import promiseMiddleware from 'redux-promise-middleware';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducer';

const middleware = applyMiddleware( promiseMiddleware() );

export default createStore(reducer, middleware);