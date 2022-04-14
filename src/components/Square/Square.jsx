/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Square({ letter, setLetters, index }) {
  return (
    <span
      role="button"
      tabIndex={index}
      onClick={() => setLetters((prev) => ({ ...prev, [index]: 'x' }))}
      className={`${styles.span}`}
    >
      {letter}
    </span>
  );
}

export default Square;
