/* eslint-disable import/extensions */
import { useContext } from 'react';
import { ThemeContext } from '../contexts/theme.jsx';

function useTheme() {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be within ThemeProvider!');

  return context;
}

export default useTheme;
