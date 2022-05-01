/* eslint-disable import/extensions */
import { useContext } from 'react';
import { LanguageContext } from '../contexts/language.jsx';

function useLang() {
  const context = useContext(LanguageContext);

  if (context === undefined)
    throw new Error('useLang must be within LanguageProvider!');

  return context;
}

export default useLang;
