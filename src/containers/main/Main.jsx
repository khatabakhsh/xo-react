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
  const navigate = useNavigate();

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
  const [status, setStatus] = useState('');
  const [turn, setTurn] = useState(players.first.name);
  const [counter, setCounter] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    counter % 2 === 0 ? setLevel(0) : setLevel(1);
  }, [counter]);

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
      turn === players.first.name
        ? (players.first.score += 1)
        : (players.second.score += 1);
    } else if (
      (counter % 2 === 0 && level === 9) ||
      (counter % 2 === 1 && level === 10)
    ) {
      setStatus('draw');
    } else {
      level % 2 === 0
        ? setTurn(players.first.name)
        : setTurn(players.second.name);
      setLevel((prev) => prev + 1);
    }
  }, [squares]);

  const handleClear = () => {
    setSquares(initialSquares);
    setStatus('');
    setCounter((prev) => prev + 1);
  };
  const handleNew = () => {
    setPlayerNames('', '');
    navigate('/', { replace: true });
  };

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
          onClick={handleClear}
        />
        <Button
          type="button"
          text={lang === 'en' ? 'New Play' : 'بازی جدید'}
          onClick={handleNew}
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
