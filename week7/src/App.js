import React from 'react';
import './App.css';
import Pushup from './components/Pushup';
import Pullup from './components/Pullup';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Pushup />
        <Pullup />
      </header>
    </div>
  );
}

export default App;
