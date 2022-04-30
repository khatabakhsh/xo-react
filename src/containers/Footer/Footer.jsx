import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../contexts/theme';
import githubLight from '../../assets/images/github-mark-light.png';
import githubDark from '../../assets/images/github-mark-dark.png';

function Footer() {
  const { theme } = useTheme();
  return (
    <footer className={styles.footer}>
      <small>
        <a
          href="https://github.com/khatabakhsh/xo-react"
          target="_blank"
          rel="noreferrer"
          className={theme === 'light' ? styles.smallLight : styles.smallDark}
        >
          See repository on GitHub{' '}
          <img
            src={theme === 'light' ? githubDark : githubLight}
            alt="github-mark"
            width="15"
            height="15"
          />
        </a>
      </small>
    </footer>
  );
}
export default Footer;
