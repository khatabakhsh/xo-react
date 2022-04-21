import React from 'react';
import styles from './styles.module.scss';
import githubMark from '../../assets/images/GitHub-Mark-32px.png';

function Footer() {
  return (
    <footer className={styles.footer}>
      <small className={styles.small}>
        <a
          href="https://github.com/khatabakhsh/xo-react"
          target="_blank"
          rel="noreferrer"
        >
          See Repository on Github{' '}
          <img src={githubMark} alt="github-mark" width="15" height="15" />
        </a>
      </small>
    </footer>
  );
}
export default Footer;
