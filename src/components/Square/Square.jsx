/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Square({ letter, setSquares, index, turn, symbolFirst, win }) {
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
      className={`${styles.span} ${
        letter === symbolFirst ? styles.firstPlayer : styles.secondPlayer
      }`}
    >
      <p>{letter}</p>
    </span>
  );
}

export default Square;
