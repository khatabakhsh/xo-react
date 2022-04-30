/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../contexts/theme';

function Info({ players, turn, symbolFirst, win, draw }) {
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
          turn === symbolFirst ? styles.firstTurn : styles.secondTurn
        } ${
          !win && draw
            ? theme === 'light'
              ? styles.drawLight
              : styles.drawDark
            : ''
        } ${win ? styles.win : ''}`}
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
