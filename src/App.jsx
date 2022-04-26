import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { PageLayout } from './components';
import { Header, Main, Footer, Start } from './containers';

function App() {
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
        <Route
          path="game"
          element={<Main players={players} setPlayerNames={setPlayerNames} />}
        />
        <Route path="/" element={<Start setPlayerNames={setPlayerNames} />} />
      </Routes>
      <Footer />
    </PageLayout>
  );
}

export default App;
