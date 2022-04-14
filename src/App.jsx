import React from 'react';
import './App.scss';
import { PageLayout } from './components';
import { Header, Main, Footer } from './containers';

function App() {
  return (
    <PageLayout>
      <Header />
      <Main />
      <Footer />
    </PageLayout>
  );
}

export default App;
