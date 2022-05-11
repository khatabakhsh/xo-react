const putSquare = (index, turn) => {
  return { type: 'PUT_SQUARE', payload: { index, turn } };
};
const clearSquares = () => {
  return { type: 'CLEAR_SQUARES' };
};

export { putSquare, clearSquares };
