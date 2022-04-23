import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.scss';
import { PageLayout } from './components';
import { Header, Main, Footer, Start } from './containers';

function App() {
  const [scores, setScores] = useState({ firstPlayer: 0, secondPlayer: 0 });
  const resetScores = () => {
    setScores((prev) => ({
      ...prev,
      firstPlayer: 0,
      secondPlayer: 0,
    }));
  };
  return (
    <PageLayout>
      <Header />
      <Routes>
        <Route
          path="game"
          element={<Main scores={scores} resetScores={resetScores} />}
        />
        <Route path="/" element={<Start />} />
      </Routes>
      <Footer />
    </PageLayout>
  );
}

export default App;
