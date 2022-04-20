/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import Game from '../game/Game';
import { Button } from '../../components';

function Main() {
  const initialSquares = {
    1: { value: '', turn: 'X' },
    2: { value: '', turn: 'O' },
    3: { value: '', turn: 'X' },
    4: { value: '', turn: 'O' },
    5: { value: '', turn: 'X' },
    6: { value: '', turn: 'O' },
    7: { value: '', turn: 'X' },
    8: { value: '', turn: 'O' },
    9: { value: '', turn: 'X' },
  };
  const [squares, setSquares] = useState(initialSquares);
  const level = Object.values(squares).filter((item) => item !== '').length;
  const turn = level % 2 === 0 ? 'X' : 'O';
  let end = level === 9;

  const horizontalFirst =
    squares[1].value === squares[2].value &&
    squares[2].value === squares[3].value &&
    squares[2].value !== '';
  const horizontalSecond =
    squares[4].value === squares[5].value &&
    squares[5].value === squares[6].value &&
    squares[5].value !== '';
  const horizontalThird =
    squares[7].value === squares[8].value &&
    squares[8].value === squares[9].value &&
    squares[8].value !== '';
  const horizontal = horizontalFirst || horizontalSecond || horizontalThird;

  const verticalFirst =
    squares[1].value === squares[4].value &&
    squares[4].value === squares[7].value &&
    squares[4].value !== '';
  const verticalSecond =
    squares[2].value === squares[5].value &&
    squares[5].value === squares[8].value &&
    squares[5].value !== '';
  const verticalThird =
    squares[3].value === squares[6].value &&
    squares[6].value === squares[9].value &&
    squares[6].value !== '';
  const vertical = verticalFirst || verticalSecond || verticalThird;

  const diagonalFirst =
    squares[1].value === squares[5].value &&
    squares[5].value === squares[9].value &&
    squares[5].value !== '';
  const diagonalSecond =
    squares[3].value === squares[5].value &&
    squares[5].value === squares[7].value &&
    squares[5].value !== '';
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
      <Game squares={squares} setSquares={setSquares} level={level} win={win} />
      <Button
        type="button"
        text="Reset"
        onClick={() => setSquares(initialSquares)}
      />
    </main>
  );
}
export default Main;
