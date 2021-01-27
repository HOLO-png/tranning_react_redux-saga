import { createStore, compose, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import thunk from 'redux-thunk';
import rootReducer from '../reducers/index';
import generatorFuncSaga from './../sagas/index';

const composeEnhancers =
   process.env.NODE_ENV !== 'production' &&
   typeof window === 'object' &&
   window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
           shouldHotReload: false,
        })
      : compose;
const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
   const middleware = [thunk, sagaMiddleware];
   const enhancers = [applyMiddleware(...middleware)];
   const store = createStore(rootReducer, composeEnhancers(...enhancers));
   sagaMiddleware.run(generatorFuncSaga);
   return store;
};

export default configureStore;
