/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../hooks';

function Input({ label, name, type, register }) {
  const { theme } = useTheme();
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
        {...register}
      />
    </div>
  );
}
export default Input;
