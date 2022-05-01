/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../hooks';

function Button({ type, text, color, onClick }) {
  const { theme } = useTheme();
  let bgColor = null;
  if (color === 'orange') {
    bgColor = theme === 'light' ? styles.orangeLight : styles.orangeDark;
  } else {
    bgColor = theme === 'light' ? styles.blueLight : styles.blueDark;
  }
  return (
    <button
      className={`${styles.button} ${bgColor}`}
      type={type}
      onClick={onClick}
    >
      {text}
    </button>
  );
}
export default Button;
