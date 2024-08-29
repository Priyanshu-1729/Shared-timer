// src/App.js
import React from 'react';
import Stopwatch from './components/Stopwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="stopwatch-container left">
        <Stopwatch name="Arya" />
      </div>
      <div className="stopwatch-container right">
        <Stopwatch name="Priyanshu" />
      </div>
    </div>
  );
}

export default App;
