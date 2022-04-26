/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Info({ players, turn, symbolFirst, win, draw }) {
  return (
    <div className={styles.container}>
      <div className={styles.players}>
        <span className={styles.player}>{players.first.name}</span>
        <span
          className={styles.scores}
        >{`${players.first.score} - ${players.second.score}`}</span>
        <span className={styles.player}>{players.second.name}</span>
      </div>
      <div
        className={`${styles.turn} ${
          turn === symbolFirst ? styles.firstTurn : styles.secondTurn
        } ${!win && draw ? styles.draw : ''} ${win ? styles.win : ''}`}
      >
        {!win && !draw ? `${turn} Turn` : ''}
        {!win && draw ? 'draw' : ''}
        {win
          ? `${
              turn === symbolFirst ? players.first.name : players.second.name
            } won`
          : ''}
      </div>
    </div>
  );
}

export default Info;
