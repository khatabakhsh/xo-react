/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Input({ label, type, id }) {
  return (
    <>
      <label htmlFor={id}>{label}</label>
      <input type={type} />
    </>
  );
}
export default Input;
