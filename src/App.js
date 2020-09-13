import React from 'react';
import './App.css';

import System from './components/3d-system';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <System />
    </div>
  );
}

export default App;
