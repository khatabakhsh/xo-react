import React from 'react';
import styles from './styles.module.scss';
import { useTheme, useLang } from '../../hooks';
import githubLight from '../../assets/images/github-mark-light.png';
import githubDark from '../../assets/images/github-mark-dark.png';

function Footer() {
  const { theme } = useTheme();
  const { lang } = useLang();
  return (
    <footer className={styles.footer}>
      <small>
        <a
          href="https://github.com/khatabakhsh/xo-react"
          target="_blank"
          rel="noreferrer"
          className={theme === 'light' ? styles.smallLight : styles.smallDark}
        >
          <img
            src={theme === 'light' ? githubDark : githubLight}
            alt="github-mark"
            className="fa"
            width="15"
            height="15"
          />
          {`${
            lang === 'en'
              ? 'See repository on GitHub '
              : ' دیدن ریپازیتوری در گیت‌هاب'
          }`}
          <img
            src={theme === 'light' ? githubDark : githubLight}
            alt="github-mark"
            className="en"
            width="15"
            height="15"
          />
        </a>
      </small>
      <style jsx="true">{`
        ${lang === 'en'
          ? `.fa {
            display: none;
            }
            .en {
              transform: translateY(1px);
            }`
          : `small {
        font-family: 'IRANSansX';
        font-weight: 200;
      }
      .en {
        display: none;
      }
      .fa {
        transform: translateY(3px);
      }`}
      `}</style>
    </footer>
  );
}
export default Footer;
