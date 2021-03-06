import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import ReduxThunk from 'redux-thunk';
import rootReducer from './combineReducers';

// middleWare
const middleWare = [ReduxThunk];
const enhancer = applyMiddleware(...middleWare);

// create base store
function configureStore(reducers) {
  return createStore(reducers, composeWithDevTools(enhancer));
}

export default configureStore(rootReducer);
