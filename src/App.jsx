import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Routes, Route, Navigate } from 'react-router-dom';
import './App.scss';
import { PageLayout } from './components';
import { Header, Main, Footer, Start } from './containers';
import woff from './assets/fonts/Merienda/merienda-v14-latin-ext_latin-700.woff';
import woff2 from './assets/fonts/Merienda/merienda-v14-latin-ext_latin-700.woff2';

function App() {
  // remove browser addressbar on mobiles
  useEffect(() => {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }, []);

  const { players } = useSelector((state) => state);

  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route path="/" element={<Start />} />
        {players.first.name === '' && (
          <Route path="game" element={<Navigate to="/" />} />
        )}
        <Route path="game" element={<Main />} />
      </Routes>
      <Footer />

      {/* preload font before display for Square Component zero-delay */}
      <link
        rel="preload"
        as="font"
        href={woff}
        type="font/woff"
        crossOrigin="anonymous"
      />
      <link
        rel="preload"
        as="font"
        href={woff2}
        type="font/woff2"
        crossOrigin="anonymous"
      />
    </PageLayout>
  );
}

export default App;
