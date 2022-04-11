import React from 'react';
import './App.scss';
import { Header, Game, Footer } from './containers';
import { PageLayout } from './components';

function App() {
  return (
    <PageLayout>
      <Header />
      <Game />
      <Footer />
    </PageLayout>
  );
}

export default App;
