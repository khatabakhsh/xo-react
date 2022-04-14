/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';

function PageLayout({ children }) {
  return <div className={styles.div}>{children}</div>;
}
export default PageLayout;
