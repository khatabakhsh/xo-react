/* eslint-disable react/prop-types */
import React from 'react';
import styles from './styles.module.scss';
import { useTheme } from '../../hooks';

function PageLayout({ children }) {
  const { theme } = useTheme();
  return (
    <div className={theme === 'light' ? styles.divLight : styles.divDark}>
      {children}
    </div>
  );
}
export default PageLayout;
