/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { Button, Grid, Square, Info } from '../../components';

let counter = 0;

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

  // const symbolFirst = players.first.name[0].toUpperCase();
  // const symbolSecond = players.second.name[0].toUpperCase();

  const level = Object.values(squares).filter((item) => item !== '').length;

  let turn = '';

  if (level === 0) {
    turn = counter % 2 === 0 ? players.first.name : players.second.name;
  } else if (counter % 2 === 0) {
    turn = level % 2 === 0 ? players.first.name : players.second.name;
  } else {
    turn = level % 2 === 1 ? players.first.name : players.second.name;
  }

  const changeTurn = () => {
    turn === players.first.name
      ? (turn = players.second.name)
      : (turn = players.first.name);
  };

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
    counter += 1;
    changeTurn();
    turn === players.first.name
      ? (players.first.score += 1)
      : (players.second.score += 1);
  } else if (level === 9) {
    counter += 1;
    draw = true;
  }

  const navigate = useNavigate();
  return (
    <main className={styles.main}>
      <Info players={players} turn={turn} win={win} draw={draw} />
      <Grid>
        {Object.keys(squares).map((squareIndex) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              index={Number(squareIndex)}
              turn={turn}
              win={win}
              firstPlayerName={players.first.name}
              // don't use index of map. squareIndex is string and unique.
              key={squareIndex}
            />
          );
        })}
      </Grid>
      <div className={styles.buttons}>
        <Button
          type="button"
          text="Clear"
          color="orange"
          onClick={() => setSquares(initialSquares)}
        />
        <Button
          type="button"
          text="New"
          onClick={() => {
            setSquares(initialSquares);
            setPlayerNames('', '');
            navigate('/', { replace: true });
          }}
        />
      </div>
    </main>
  );
}
export default Main;
