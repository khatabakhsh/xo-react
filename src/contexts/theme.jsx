/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useMemo, useState } from 'react';

const ThemeContext = createContext(undefined);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  );

  const toggleThemeMode = useCallback(() => {
    setTheme((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(
    () => ({ toggleThemeMode, theme }),
    [theme, toggleThemeMode]
  );

  return (
    <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>
  );
}

export { ThemeProvider, ThemeContext };
