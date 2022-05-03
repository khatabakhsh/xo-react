/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles.module.scss';
import { Button, Grid, Square, Info } from '../../components';
import { useLang } from '../../hooks';

function Main({ players, setPlayerNames }) {
  const { lang } = useLang();

  useEffect(() => {
    document.title =
      lang === 'en' ? 'Tic-Tac-Toe : Playing' : 'بازی دوز : در حال بازی';
  }, [lang]);

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

  let turn = '';

  let counter = players.first.score + players.second.score;

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

  const [status, setStatus] = useState('');

  useEffect(() => {
    const horizontalFirst =
      squares[1] === squares[2] &&
      squares[2] === squares[3] &&
      squares[2] !== '';
    const horizontalSecond =
      squares[4] === squares[5] &&
      squares[5] === squares[6] &&
      squares[5] !== '';
    const horizontalThird =
      squares[7] === squares[8] &&
      squares[8] === squares[9] &&
      squares[8] !== '';
    const horizontal = horizontalFirst || horizontalSecond || horizontalThird;

    const verticalFirst =
      squares[1] === squares[4] &&
      squares[4] === squares[7] &&
      squares[4] !== '';
    const verticalSecond =
      squares[2] === squares[5] &&
      squares[5] === squares[8] &&
      squares[5] !== '';
    const verticalThird =
      squares[3] === squares[6] &&
      squares[6] === squares[9] &&
      squares[6] !== '';
    const vertical = verticalFirst || verticalSecond || verticalThird;

    const diagonalFirst =
      squares[1] === squares[5] &&
      squares[5] === squares[9] &&
      squares[5] !== '';
    const diagonalSecond =
      squares[3] === squares[5] &&
      squares[5] === squares[7] &&
      squares[5] !== '';
    const diagonal = diagonalFirst || diagonalSecond;

    if (horizontal || vertical || diagonal) {
      setStatus('win');
      counter += 1;
      changeTurn();
      turn === players.first.name
        ? (players.first.score += 1)
        : (players.second.score += 1);
    } else if (level === 9) {
      counter += 1;
      setStatus('draw');
    }
  }, [squares]);

  const navigate = useNavigate();

  return (
    <main className={styles.main}>
      <Info players={players} turn={turn} status={status} />
      <Grid>
        {Object.keys(squares).map((squareIndex) => {
          return (
            <Square
              squares={squares}
              setSquares={setSquares}
              index={Number(squareIndex)}
              turn={turn}
              status={status}
              firstPlayerName={players.first.name}
              // don't use index of map. squareIndex is string and unique.
              key={squareIndex}
            />
          );
        })}
      </Grid>
      <section className={`${styles.buttons} buttons`}>
        <Button
          type="button"
          text={lang === 'en' ? 'Clear' : 'پاک کردن'}
          color="orange"
          onClick={() => {
            setSquares(initialSquares);
            setStatus('');
          }}
        />
        <Button
          type="button"
          text={lang === 'en' ? 'New Play' : 'بازی جدید'}
          onClick={() => {
            setSquares(initialSquares);
            setStatus('');
            setPlayerNames('', '');
            navigate('/', { replace: true });
          }}
        />
        <style jsx="true">{`
          ${lang === 'en'
            ? ''
            : `.buttons {
                flex-direction: row-reverse !important;
              }`}
        `}</style>
      </section>
    </main>
  );
}
export default Main;
