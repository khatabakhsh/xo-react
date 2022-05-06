/* eslint-disable no-param-reassign */
/* eslint-disable no-return-assign */
import React, { useEffect, useReducer } from 'react';
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

  const initialPlayers = {
    first: { name: '', score: 0 },
    second: { name: '', score: 0 },
  };
  const playersReducer = (state, action) => {
    switch (action.type) {
      case 'setPlayers':
        return {
          first: { ...state.first, name: action.firstName },
          second: { ...state.second, name: action.secondName },
        };
      case 'increaseScore':
        return {
          ...state,
          [action.player]: {
            ...state[action.player],
            score: (state[action.player].score += 1),
          },
        };
      case 'resetPlayers':
        return initialPlayers;

      default:
        throw new Error();
    }
  };
  const [players, dispatchPlayers] = useReducer(playersReducer, initialPlayers);

  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route path="/" element={<Start dispatchPlayers={dispatchPlayers} />} />
        {players.first.name === '' && (
          <Route path="game" element={<Navigate to="/" />} />
        )}
        <Route
          path="game"
          element={<Main players={players} dispatchPlayers={dispatchPlayers} />}
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
