import React, { useState } from 'react';
import './App.scss';
import { PageLayout } from './components';
import { Header, Main, Footer } from './containers';

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
      <Main scores={scores} resetScores={resetScores} />
      <Footer />
    </PageLayout>
  );
}

export default App;
