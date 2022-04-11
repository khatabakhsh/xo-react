/* eslint-disable react/prop-types */
import React from 'react';
import style from './style.module.scss';

function PageLayout({ children }) {
  return <div className={style.div}>{children}</div>;
}
export default PageLayout;
