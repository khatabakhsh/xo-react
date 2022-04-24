/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Input({ label, type, id }) {
  return (
    <div>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <input className={styles.input} type={type} id={id} name={id} />
    </div>
  );
}
export default Input;
