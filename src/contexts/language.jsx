/* eslint-disable react/prop-types */
import React, { createContext, useCallback, useMemo, useState } from 'react';

const LanguageContext = createContext(undefined);

function LanguageProvider({ children }) {
  const [lang, setLang] = useState('en');

  const changeLang = useCallback(() => {
    setLang((prev) => (prev === 'en' ? 'fa' : 'en'));
  }, []);

  const value = useMemo(() => ({ changeLang, lang }), [lang, changeLang]);

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export { LanguageProvider, LanguageContext };
