/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme, useLang } from '../../hooks';

function Info({ players, turn, win, draw }) {
  const { theme } = useTheme();
  const { lang } = useLang();

  const CONTENT = {
    TURN: lang === 'en' ? 'Turn' : 'نوبت',
    WIN:
      lang === 'en' ? `${turn} won this level` : `برنده این مرحله بود ${turn}`,
    DRAW: lang === 'en' ? 'Draw !' : '! مساوی',
  };
  return (
    <section className={styles.container}>
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
        className={`turn ${styles.turn} ${
          turn === players.first.name ? styles.firstTurn : styles.secondTurn
        } ${
          !win && draw
            ? theme === 'light'
              ? styles.drawLight
              : styles.drawDark
            : ''
        } ${win && styles.win}`}
      >
        {!win && !draw ? `${turn[0].toUpperCase()} ${CONTENT.TURN}` : ''}
        {!win && draw ? CONTENT.DRAW : ''}
        {win && CONTENT.WIN}

        <style jsx="true">{`
          ${lang === 'fa' &&
          `.turn {
            font-family: IRANSansX;
            font-weight: normal;
          }`}
        `}</style>
      </div>
    </section>
  );
}

export default Info;
