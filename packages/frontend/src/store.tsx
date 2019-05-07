import { applyMiddleware, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './sagas/index';
import logger from 'redux-logger';

import rootReducer from './reducers/rootReducer';

const sagaMiddleware = createSagaMiddleware();

const middleware = [sagaMiddleware, logger];

const store = createStore(rootReducer, applyMiddleware(...middleware));

sagaMiddleware.run(
  rootSaga
);

export default store;
