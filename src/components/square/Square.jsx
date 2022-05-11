/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/prop-types */
import React, { memo, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { putSquare } from '../../redux/squares/action';
import styles from './styles.module.scss';
import { useTheme } from '../../hooks';

function Square({ square, index, turn, status, firstPlayerName }) {
  const { theme } = useTheme();
  const dispatch = useDispatch();
  const handleClick = useCallback(() => {
    if (square === '' && !status) {
      dispatch(putSquare(index, turn));
    }
  }, [status, square, turn]);

  return (
    <span
      role="button"
      tabIndex={index}
      onClick={handleClick}
      className={`${theme === 'light' ? styles.spanLight : styles.spanDark} ${
        square === firstPlayerName ? styles.firstPlayer : styles.secondPlayer
      }`}
    >
      {square && square[0].toUpperCase()}
    </span>
  );
}

export default memo(Square);
