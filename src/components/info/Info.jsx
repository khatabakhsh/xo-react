/* eslint-disable no-nested-ternary */
/* eslint-disable react/prop-types */
import React from 'react';
import { useSelector } from 'react-redux';
import styles from './styles.module.scss';
import { useTheme, useLang } from '../../hooks';

function Info({ turn, status }) {
  const { theme } = useTheme();
  const { lang } = useLang();
  const { players } = useSelector((state) => state);

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
          status === 'draw'
            ? theme === 'light'
              ? styles.drawLight
              : styles.drawDark
            : ''
        } ${status === 'win' && styles.win}`}
      >
        {status === 'win' && CONTENT.WIN}
        {status === 'draw' && CONTENT.DRAW}
        {!status ? `${turn[0].toUpperCase()} ${CONTENT.TURN}` : ''}

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
