/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../contexts/theme';

function Square({ letter, setSquares, index, turn, symbolFirst, win }) {
  const { theme } = useTheme();
  const handleClick = () => {
    if (letter === '' && !win) {
      setSquares((prev) => ({ ...prev, [index]: turn }));
    }
  };
  return (
    <span
      role="button"
      tabIndex={index}
      onClick={handleClick}
      className={`${theme === 'light' ? styles.spanLight : styles.spanDark} ${
        letter === symbolFirst ? styles.firstPlayer : styles.secondPlayer
      }`}
    >
      {letter}
    </span>
  );
}

export default Square;
