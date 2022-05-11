/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState, useEffect, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearSquares } from '../../redux/squares/action';
import styles from './styles.module.scss';
import { Button, Grid, Square, Info } from '../../components';
import { useLang } from '../../hooks';
import checkWin from '../../util/checkWin';

function Main({ players, dispatchPlayers }) {
  const { lang } = useLang();
  const navigate = useNavigate();

  useEffect(() => {
    document.title =
      lang === 'en' ? 'Tic-Tac-Toe : Playing' : 'بازی دوز : در حال بازی';
  }, [lang]);

  const squares = useSelector((state) => state.squares);
  const dispatch = useDispatch();

  const [turn, setTurn] = useState(players.first.name);
  const [status, setStatus] = useState('');
  const [counter, setCounter] = useState(0);
  const [level, setLevel] = useState(0);

  useEffect(() => {
    if (checkWin(squares)) {
      dispatchPlayers({
        type: 'increaseScore',
        player: turn === players.first.name ? 'first' : 'second',
      });
      setStatus('win');
      setCounter((prev) => prev + 1);
    } else if (
      (counter % 2 === 0 && level === 9) ||
      (counter % 2 === 1 && level === 10)
    ) {
      setStatus('draw');
      setCounter((prev) => prev + 1);
    } else {
      level % 2 === 0
        ? setTurn(players.first.name)
        : setTurn(players.second.name);
      setLevel((prev) => prev + 1);
    }
  }, [squares]);

  const handleClear = useCallback(() => {
    setStatus('');
    dispatch(clearSquares());

    if (counter % 2 === 0) {
      setLevel(0);
      setTurn(players.first.name);
    } else {
      setLevel(1);
      setTurn(players.second.name);
    }
  }, [counter]);

  const handleNew = useCallback(() => {
    dispatchPlayers({ type: 'resetPlayers' });
    navigate('/', { replace: true });
  }, []);

  return (
    <main className={styles.main}>
      <Info players={players} turn={turn} status={status} />
      <Grid>
        {Object.keys(squares).map((squareIndex) => {
          return (
            <Square
              square={squares[squareIndex]}
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
          disabled={status === ''}
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
