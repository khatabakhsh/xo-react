/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Square({ letter, setLetters, index, turn }) {
  const handleClick = () => {
    if (letter === '') {
      setLetters((prev) => ({ ...prev, [index]: turn }));
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
