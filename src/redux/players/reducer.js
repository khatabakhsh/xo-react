/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
const initialState = {
  first: { name: '', score: 0 },
  second: { name: '', score: 0 },
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'SET_PLAYER_NAMES':
      return {
        first: { ...state.first, name: action.payload.firstName },
        second: { ...state.second, name: action.payload.secondName },
      };
    case 'INCREASE_SCORE':
      return {
        ...state,
        [action.payload]: {
          ...state[action.payload],
          score: (state[action.payload].score += 1),
        },
      };
    case 'RESET_PLAYERS':
      return initialState;

    default:
      return state;
  }
};

export default reducer;
