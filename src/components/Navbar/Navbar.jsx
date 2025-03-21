import React from 'react';
import './Navbar.css';
import { getCurrentSeason, getCurrentYear } from '../../utils/helpers';

const Navbar = ({ onSeasonChange }) => {
  const currentSeason = getCurrentSeason();
  const currentYear = getCurrentYear();

  const handleSeasonClick = (season) => {
    if (onSeasonChange) {
      onSeasonChange(season, currentYear);
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">MALCharts</div>
        
        <div className="seasons">
          {['winter', 'spring', 'summer', 'fall'].map(season => (
            <a 
              key={season}
              href="#" 
              className={`season ${currentSeason === season ? 'active' : ''}`}
              onClick={(e) => {
                e.preventDefault();
                handleSeasonClick(season);
              }}
            >
              <div className="season-name">{season.charAt(0).toUpperCase() + season.slice(1)}</div>
              <div className="season-year">{currentYear}</div>
            </a>
          ))}
        </div>

        <div className="nav-actions">
          <button className="nav-button">Airing</button>
          <button className="nav-button">Archive</button>
          <button className="nav-button">TBA</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;