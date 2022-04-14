/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Square({ letter }) {
  return <span className={`${styles.span}`}>{letter}</span>;
}

export default Square;
