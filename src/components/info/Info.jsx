/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Info({ firstPlayer, secondPlayer, scores, turn, win, draw }) {
  return (
    <div className={styles.container}>
      <div className={styles.players}>
        <span className={styles.player}>{firstPlayer}</span>
        <span
          className={styles.scores}
        >{`${scores.firstPlayer} - ${scores.secondPlayer}`}</span>
        <span className={styles.player}>{secondPlayer}</span>
      </div>
      <div
        className={`${styles.turn} ${
          turn === 'X' ? styles.firstTurn : styles.secondTurn
        } ${!win && draw ? styles.draw : ''} ${win ? styles.win : ''}`}
      >
        {!win && !draw ? `${turn} Turn` : ''}
        {!win && draw ? 'draw' : ''}
        {win ? `player ${turn} won` : ''}
      </div>
    </div>
  );
}

export default Info;