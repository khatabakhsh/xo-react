/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Info({ firstPlayer, secondPlayer }) {
  return (
    <div className={styles.div}>
      <span>{firstPlayer}</span>
      <span>0 - 0</span>
      <span>{secondPlayer}</span>
      {/* <div>{win === false ? `${turn} Turn` : `player ${turn} won`}</div> */}
    </div>
  );
}

export default Info;
