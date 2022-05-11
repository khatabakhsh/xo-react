import { legacy_createStore as createStore } from 'redux';
import { devToolsEnhancer } from 'redux-devtools-extension';
import rootReducer from './rootReducer';

const store = createStore(
  rootReducer,
  /* preloadedState, */ devToolsEnhancer()
);

export default store;
