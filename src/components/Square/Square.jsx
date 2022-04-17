/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Square({ letter, setSquares, index, turn, changeTurn, win }) {
  const handleClick = () => {
    if (letter === '' && !win) {
      setSquares((prev) => ({ ...prev, [index]: turn }));
      changeTurn();
    }
  };
  return (
    <span
      role="button"
      tabIndex={index}
      onClick={handleClick}
      className={`${styles.span}`}
    >
      {letter}
    </span>
  );
}

export default Square;
