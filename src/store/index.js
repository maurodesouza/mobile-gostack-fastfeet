import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { persistStore } from 'redux-persist';

import reducers from './modules/rootReducer';
import sagas from './modules/rootSaga';
import persist from './persistReducer';

const middlewares = [];

const sagaMonitor = __DEV__ ? console.tron.createSagaMonitor() : null;

const sagaMiddleware = createSagaMiddleware({ sagaMonitor });

middlewares.push(sagaMiddleware);

const composer = __DEV__
  ? compose(applyMiddleware(...middlewares), console.tron.createEnhancer())
  : compose(applyMiddleware(...middlewares));

const store = createStore(persist(reducers), composer);

sagaMiddleware.run(sagas);

const persistor = persistStore(store);

export { store, persistor };
