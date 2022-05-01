/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../contexts/theme';

function Square({ squares, setSquares, index, turn, win, firstPlayerName }) {
  const { theme } = useTheme();
  const handleClick = () => {
    if (squares[index] === '' && !win) {
      setSquares((prev) => ({ ...prev, [index]: turn }));
    }
  };
  let letter = '';
  if (squares[index] !== '') {
    letter = squares[index][0].toUpperCase();
  }
  return (
    <span
      role="button"
      tabIndex={index}
      onClick={handleClick}
      className={`${theme === 'light' ? styles.spanLight : styles.spanDark} ${
        squares[index] === firstPlayerName
          ? styles.firstPlayer
          : styles.secondPlayer
      }`}
    >
      {letter}
    </span>
  );
}

export default Square;
