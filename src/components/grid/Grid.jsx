/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Grid({ children }) {
  return <section className={`${styles.section}`}>{children}</section>;
}

export default Grid;
