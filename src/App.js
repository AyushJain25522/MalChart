import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import SeasonalChart from './components/SeasonalChart/SeasonalChart';
import { getCurrentSeason } from './utils/helpers';

function App() {
  const [currentSeason, setCurrentSeason] = useState(getCurrentSeason());

  const handleSeasonChange = (season) => {
    setCurrentSeason(season);
  };

  return (
    <div className="App">
      <Navbar onSeasonChange={handleSeasonChange} />
      <SeasonalChart season={currentSeason} />
    </div>
  );
}

export default App;