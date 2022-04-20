/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import styles from './styles.module.scss';
import { Button, Grid, Square } from '../../components';

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
  const level = Object.values(squares).filter(
    (item) => item.value !== ''
  ).length;
  const turn = level % 2 === 0 ? 'X' : 'O';

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

  return (
    <main className={styles.main}>
      <div>
        <span>X</span>
        <span>0 - 0</span>
        <span>O</span>
        {/* <div>{win === false ? `${turn} Turn` : `player ${turn} won`}</div> */}
      </div>
      <Grid>
        {Object.keys(squares).map((squareIndex) => {
          return (
            <Square
              letter={squares[squareIndex].value}
              setSquares={setSquares}
              index={Number(squareIndex)}
              win={win}
              // don't use index of map. squareIndex is string and unique.
              key={squareIndex}
            />
          );
        })}
      </Grid>
      <Button
        type="button"
        text="Reset"
        onClick={() => setSquares(initialSquares)}
      />
    </main>
  );
}
export default Main;
