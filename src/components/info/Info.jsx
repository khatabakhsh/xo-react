/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function Info() {
  return (
    <div>
      <span>X</span>
      <span>0 - 0</span>
      <span>O</span>
      {/* <div>{win === false ? `${turn} Turn` : `player ${turn} won`}</div> */}
    </div>
  );
}

export default Info;
