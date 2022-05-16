/* eslint-disable no-param-reassign */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-expressions */
import React, { useState, useReducer, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
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

  const [status, setStatus] = useState('');
  const [counter, setCounter] = useState(0);

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
  const squaresReducer = (state, action) => {
    switch (action.type) {
      case 'put':
        return { ...state, [action.payload.index]: action.payload.turn };
      case 'clear':
        return initialSquares;
      default:
        throw new Error();
    }
  };
  const [squares, dispatchSquares] = useReducer(squaresReducer, initialSquares);

  const level = Object.values(squares).filter((item) => item !== '').length;
  // use Closure to set turn value
  const chooseTurn = () => {
    if (counter % 2 === 0) {
      const turn = level % 2 === 0 ? players.first.name : players.second.name;
      return turn;
    }
    const turn = level % 2 === 1 ? players.first.name : players.second.name;
    return turn;
  };
  const turn = chooseTurn();

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
      (counter % 2 === 1 && level === 9)
    ) {
      setStatus('draw');
      setCounter((prev) => prev + 1);
    }
  }, [squares]);

  const handleClear = useCallback(() => {
    setStatus('');
    dispatchSquares({ type: 'clear' });
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
              dispatch={dispatchSquares}
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
