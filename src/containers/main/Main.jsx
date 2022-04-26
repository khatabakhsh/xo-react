/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { Button, Grid, Square, Info } from '../../components';

function Main({ players, setPlayerNames }) {
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

  const symbolFirst = players.first.name[0].toUpperCase();
  const symbolSecond = players.second.name[0].toUpperCase();

  const level = Object.values(squares).filter((item) => item !== '').length;

  let turn = '';
  const changeTurn = () => {
    turn === symbolFirst ? (turn = symbolSecond) : (turn = symbolFirst);
  };

  const sumScores = players.first.score + players.second.score;
  if (level === 0) {
    turn = sumScores % 2 === 0 ? symbolFirst : symbolSecond;
  } else if (sumScores % 2 === 0) {
    turn = level % 2 === 0 ? symbolFirst : symbolSecond;
  } else {
    turn = level % 2 === 1 ? symbolFirst : symbolSecond;
  }

  let draw = false;

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
    turn === symbolFirst
      ? (players.first.score += 1)
      : (players.second.score += 1);
  } else if (level === 9) {
    draw = true;
  }

  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <Info
        players={players}
        turn={turn}
        symbolFirst={symbolFirst}
        win={win}
        draw={draw}
      />
      <Grid>
        {Object.keys(squares).map((squareIndex) => {
          return (
            <Square
              letter={squares[squareIndex]}
              setSquares={setSquares}
              index={Number(squareIndex)}
              turn={turn}
              symbolFirst={symbolFirst}
              win={win}
              // don't use index of map. squareIndex is string and unique.
              key={squareIndex}
            />
          );
        })}
      </Grid>
      <div className={styles.buttons}>
        <Button
          type="button"
          text="New"
          onClick={() => {
            setSquares(initialSquares);
            setPlayerNames('', '');
            navigate('/', { replace: true });
          }}
        />
        <Button
          type="button"
          text="Clear"
          onClick={() => setSquares(initialSquares)}
        />
      </div>
    </main>
  );
}
export default Main;
