/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React, { memo } from 'react';
import styles from './styles.module.scss';
import { useTheme, useLang } from '../../hooks';

function Button({ type, text, color, onClick, disabled }) {
  const { theme } = useTheme();
  const { lang } = useLang();
  let bgColor = null;
  if (color === 'orange') {
    bgColor = theme === 'light' ? styles.orangeLight : styles.orangeDark;
  } else {
    bgColor = theme === 'light' ? styles.blueLight : styles.blueDark;
  }
  return (
    <button
      className={`${styles.button} ${bgColor}`}
      type={type}
      onClick={onClick}
      disabled={disabled}
    >
      {text}

      <style jsx="true">{`
        ${lang === 'en'
          ? ''
          : `button {
        font-family: 'IRANSansX';
        font-weight: 500;
      }`}
      `}</style>
    </button>
  );
}
export default memo(Button);
