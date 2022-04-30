/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../contexts/theme';
import darkMoon from '../../assets/images/dark-moon.svg';
import lightSun from '../../assets/images/light-sun.svg';
import languageLight from '../../assets/images/language-light.svg';
import languageDark from '../../assets/images/language-dark.svg';

function Header() {
  const { theme, toggleThemeMode } = useTheme();

  return (
    <header
      className={theme === 'light' ? styles.headerLight : styles.headerDark}
    >
      <img
        src={theme === 'light' ? darkMoon : lightSun}
        alt=""
        className={styles.img}
        onClick={() => toggleThemeMode()}
      />
      <h1 className={theme === 'light' ? styles.h1Light : styles.h1Dark}>
        Tic-Tac-Toe
      </h1>
      <img
        src={theme === 'light' ? languageLight : languageDark}
        alt=""
        className={styles.img}
      />
    </header>
  );
}
export default Header;
