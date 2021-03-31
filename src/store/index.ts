import {createStore, compose, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import {rootReducer} from '../reducer';
import {rootSaga} from '../saga';

const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

sagaMiddleware.run(rootSaga);
