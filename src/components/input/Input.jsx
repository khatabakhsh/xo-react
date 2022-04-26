/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

// function Input({ label, type, id, rhf }) {
function Input({ label, name, type, register }) {
  return (
    <div>
      <label className={styles.label} htmlFor={name}>
        {label}
      </label>
      <input
        spellCheck="false"
        className={styles.input}
        type={type}
        id={name}
        name={name}
        {...register}
      />
    </div>
  );
}
export default Input;
