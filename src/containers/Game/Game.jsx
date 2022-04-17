/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Square, Grid } from '../../components';

function Game({ turn, changeTurn, setEnd }) {
  const [squares, setSquares] = useState({
    1: '',
    2: '',
    3: '',
    4: '',
    5: '',
    6: '',
    7: '',
    8: '',
    9: '',
  });
  // const level = Object.values(squares).filter((item) => item !== '').length;
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
    changeTurn();
    setEnd(true);
  }

  return (
    <Grid>
      {Object.keys(squares).map((squareIndex) => {
        return (
          <Square
            letter={squares[squareIndex]}
            setSquares={setSquares}
            index={Number(squareIndex)}
            turn={turn}
            changeTurn={changeTurn}
            win={win}
            // don't use index of map. squareIndex is string and unique.
            key={squareIndex}
          />
        );
      })}
    </Grid>
  );
}
export default Game;
