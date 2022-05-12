import { combineReducers } from 'redux';
import playersReducer from './players/reducer';
import squaresReducer from './squares/reducer';

const rootReducer = combineReducers({
  players: playersReducer,
  squares: squaresReducer,
});

export default rootReducer;
