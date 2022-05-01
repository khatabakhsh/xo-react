/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../hooks';

function Info({ players, turn, win, draw }) {
  const { theme } = useTheme();
  return (
    <div className={styles.container}>
      <div
        className={theme === 'light' ? styles.playersLight : styles.playersDark}
      >
        <span className={styles.player}>{players.first.name}</span>
        <span
          className={theme === 'light' ? styles.scoresLight : styles.scoresDark}
        >{`${players.first.score} - ${players.second.score}`}</span>
        <span className={styles.player}>{players.second.name}</span>
      </div>
      <div
        className={`${styles.turn} ${
          turn === players.first.name ? styles.firstTurn : styles.secondTurn
        } ${
          !win && draw
            ? theme === 'light'
              ? styles.drawLight
              : styles.drawDark
            : ''
        } ${win ? styles.win : ''}`}
      >
        {!win && !draw ? `${turn[0].toUpperCase()} Turn` : ''}
        {!win && draw ? 'draw' : ''}
        {win
          ? `${
              turn === players.first.name
                ? players.first.name
                : players.second.name
            } won`
          : ''}
      </div>
    </div>
  );
}

export default Info;
