import React, { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import SeasonalChart from './components/SeasonalChart/SeasonalChart';
import './App.css';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <SeasonalChart />
      </main>
    </div>
  );
}

export default App;