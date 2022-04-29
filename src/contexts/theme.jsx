/* eslint-disable react/prop-types */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState('light');

  const toggleThemeMode = useCallback(() => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  }, []);

  const value = useMemo(
    () => ({ toggleThemeMode, theme }),
    [theme, toggleThemeMode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

const useTheme = () => {
  const context = useContext(ThemeContext);

  if (context === undefined)
    throw new Error('useTheme must be within ThemeProvider!');

  return context;
};

export { ThemeProvider, useTheme };
