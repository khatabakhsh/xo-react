/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
import React from 'react';

function Button({ type, text, onClick }) {
  return (
    <button type={type} onClick={onClick}>
      {text}
    </button>
  );
}
export default Button;
