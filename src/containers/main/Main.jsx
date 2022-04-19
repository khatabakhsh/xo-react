/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Game from '../game/Game';
import { Button } from '../../components';

function Main() {
  const initialSquares = {
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
  const [squares, setSquares] = useState(initialSquares);
  const level = Object.values(squares).filter((item) => item !== '').length;
  const turn = level % 2 === 0 ? 'X' : 'O';
  let end = level === 9;

  const horizontalFirst =
    squares[1] === squares[2] && squares[2] === squares[3] && squares[2] !== '';
  const horizontalSecond =
    squares[4] === squares[5] && squares[5] === squares[6] && squares[5] !== '';
  const horizontalThird =
    squares[7] === squares[8] && squares[8] === squares[9] && squares[8] !== '';
  const horizontal = horizontalFirst || horizontalSecond || horizontalThird;

  const verticalFirst =
    squares[1] === squares[4] && squares[4] === squares[7] && squares[4] !== '';
  const verticalSecond =
    squares[2] === squares[5] && squares[5] === squares[8] && squares[5] !== '';
  const verticalThird =
    squares[3] === squares[6] && squares[6] === squares[9] && squares[6] !== '';
  const vertical = verticalFirst || verticalSecond || verticalThird;

  const diagonalFirst =
    squares[1] === squares[5] && squares[5] === squares[9] && squares[5] !== '';
  const diagonalSecond =
    squares[3] === squares[5] && squares[5] === squares[7] && squares[5] !== '';
  const diagonal = diagonalFirst || diagonalSecond;

  const win = horizontal || vertical || diagonal;

  if (win) {
    end = true;
  }

  return (
    <main>
      <div>
        <span>players</span>
        <div>{!end ? `${turn} Turn` : `player ${turn} won`}</div>
      </div>
      <Game squares={squares} setSquares={setSquares} turn={turn} win={win} />
      <Button
        type="button"
        text="Reset"
        onClick={() => setSquares(initialSquares)}
      />
    </main>
  );
}
export default Main;
