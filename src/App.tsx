import React from 'react';
import './index.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';

const App: React.FC = () => {
  return (
    <div>
      <Header />
      <Home />
      <Footer />
    </div>
  );
};

export default App;