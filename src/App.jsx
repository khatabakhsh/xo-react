import React, { useState, useEffect } from 'react';
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

  const [players, setPlayers] = useState({
    first: { name: '', score: 0 },
    second: { name: '', score: 0 },
  });
  const setPlayerNames = (name1, name2) => {
    setPlayers(() => ({
      first: { name: name1, score: 0 },
      second: { name: name2, score: 0 },
    }));
  };
  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route path="/" element={<Start setPlayerNames={setPlayerNames} />} />
        {players.first.name === '' && (
          <Route path="game" element={<Navigate to="/" />} />
        )}
        <Route
          path="game"
          element={<Main players={players} setPlayerNames={setPlayerNames} />}
        />
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
