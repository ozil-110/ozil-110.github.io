import { createStore, applyMiddleware, } from 'redux';
//import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/root.js';
import rootEpic from '../reducers/index.epics.js';
import { createEpicMiddleware } from 'redux-observable';

const epicMiddleware = createEpicMiddleware(rootEpic);
export default function configureStore(preloadedState) {
  return createStore(
    rootReducer,
    preloadedState,
    applyMiddleware(epicMiddleware)
  );
};
