const setPlayerNames = (firstName, secondName) => {
  return { type: 'SET_PLAYER_NAMES', payload: { firstName, secondName } };
};
const increaseScore = (winner) => {
  return { type: 'INCREASE_SCORE', payload: winner };
};
const resetPlayers = () => {
  return { type: 'RESET_PLAYERS' };
};

export { setPlayerNames, increaseScore, resetPlayers };
