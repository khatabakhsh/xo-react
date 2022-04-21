import React from 'react';
import styles from './styles.module.scss';

function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.h1}>Tic-Tac-Toe</h1>
    </header>
  );
}
export default Header;
