import React from 'react';
import './Navbar.css';
import { getCurrentSeason, getCurrentYear } from '../../utils/helpers';

const Navbar = ({ onSeasonChange }) => {
  const currentSeason = getCurrentSeason();
  const currentYear = getCurrentYear();

  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">MALCharts</div>
        
        <div className="seasons">
          <a href="#" className={`season ${currentSeason === 'winter' ? 'active' : ''}`}>
            <div className="season-name">Winter</div>
            <div className="season-year">{currentYear}</div>
          </a>
          <a href="#" className={`season ${currentSeason === 'spring' ? 'active' : ''}`}>
            <div className="season-name">Spring</div>
            <div className="season-year">{currentYear}</div>
          </a>
          <a href="#" className={`season ${currentSeason === 'summer' ? 'active' : ''}`}>
            <div className="season-name">Summer</div>
            <div className="season-year">{currentYear}</div>
          </a>
          <a href="#" className={`season ${currentSeason === 'fall' ? 'active' : ''}`}>
            <div className="season-name">Fall</div>
            <div className="season-year">{currentYear}</div>
          </a>
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