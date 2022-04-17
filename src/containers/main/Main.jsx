/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Game from '../game/Game';

function Main() {
  const [turn, setTurn] = useState('X');
  const [end, setEnd] = useState(false);
  const changeTurn = () => {
    turn === 'X' ? setTurn('O') : setTurn('X');
  };
  return (
    <main>
      <div>
        <span>players</span>
        <div>{!end ? `${turn} Turn` : `player ${turn} won`}</div>
      </div>
      <Game turn={turn} changeTurn={changeTurn} setEnd={setEnd} />
    </main>
  );
}
export default Main;
