import React from 'react';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Services from './components/Services/Services';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Services />
    </div>
  );
}

export default App;
