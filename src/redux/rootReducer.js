import { combineReducers } from 'redux';
import squaresReducer from './squares/reducer';

const rootReducer = combineReducers({
  squares: squaresReducer,
});

export default rootReducer;
