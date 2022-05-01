/* eslint-disable react/prop-types */
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';

const LanguageContext = createContext(undefined);

function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const changeLang = useCallback(() => {
    setLang((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const value = useMemo(() => ({ changeLang, lang }), [lang, changeLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

const useLang = () => {
  const context = useContext(LanguageContext);

  if (context === undefined)
    throw new Error('useLang must be within LanguageProvider!');

  return context;
};

export { LanguageProvider, useLang };
