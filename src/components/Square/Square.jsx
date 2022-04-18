/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import styles from './styles.module.scss';

function Square({ letter, setSquares, index, turn, win }) {
  const handleClick = () => {
    if (letter === '' && !win) {
      setSquares((prev) => ({ ...prev, [index]: turn }));
    }
  };
  console.log('square');
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

export default memo(Square);
