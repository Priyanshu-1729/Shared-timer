// src/App.js
import React from 'react';
import Stopwatch from './components/Stopwatch';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="stopwatch-container left">
        <Stopwatch name="Arya" dbName="arya" />
      </div>
      <div className="stopwatch-container right">
        <Stopwatch name="Priyanshu" dbName="priyanshu" />
      </div>
    </div>
  );
}

export default App;
