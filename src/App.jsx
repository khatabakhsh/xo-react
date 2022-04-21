import React from 'react';
import './App.scss';
import { PageLayout } from './components';
import { Header, Main, Footer } from './containers';

function App() {
  const scores = { firstPlayer: 0, secondPlayer: 0 };
  return (
    <PageLayout>
      <Header />
      <Main scores={scores} />
      <Footer />
    </PageLayout>
  );
}

export default App;
