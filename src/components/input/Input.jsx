/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme, useLang } from '../../hooks';

function Input({ label, name, type, placeholder, register }) {
  const { theme } = useTheme();
  const { lang } = useLang();
  return (
    <div>
      <label
        className={theme === 'light' ? styles.labelLight : styles.labelDark}
        htmlFor={name}
      >
        {label}
      </label>
      <input
        spellCheck="false"
        className={theme === 'light' ? styles.inputLight : styles.inputDark}
        type={type}
        id={name}
        name={name}
        placeholder={placeholder}
        {...register}
      />

      <style jsx="true">{`
        ${lang === 'en'
          ? ''
          : `label {
        font-family: 'IRANSansX';
        font-weight: 500;
        text-align: right !important;
      }`}
      `}</style>
    </div>
  );
}
export default Input;
