/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import styles from './styles.module.scss';

function Square({ letter, setSquares, index, win }) {
  const handleClick = () => {
    if (letter === '' && !win) {
      setSquares((prev) => ({
        ...prev,
        [index]: { ...prev[index], value: prev[index].turn },
      }));
    }
  };
  return (
    <span
      role="button"
      tabIndex={index}
      onClick={handleClick}
      className={`${styles.span} ${
        letter === 'X' ? styles.firstPlayer : styles.secondPlayer
      }`}
    >
      {letter}
    </span>
  );
}

export default memo(Square);
