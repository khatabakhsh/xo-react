/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Button({ type, text, onClick }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
