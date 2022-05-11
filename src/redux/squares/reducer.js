const initialState = {
  1: '',
  2: '',
  3: '',
  4: '',
  5: '',
  6: '',
  7: '',
  8: '',
  9: '',
};
const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case 'PUT_SQUARE':
      return { ...state, [action.payload.index]: action.payload.turn };
    case 'CLEAR_SQUARES':
      return initialState;
    default:
      return initialState;
  }
};

export default reducer;
