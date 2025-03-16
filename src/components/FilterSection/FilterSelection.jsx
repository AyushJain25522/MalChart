import React from 'react';
import './FilterSection.css';

const FilterSection = ({ onFilterChange }) => {
  const formats = ['TV', 'Movie', 'OVA', 'ONA', 'Special'];
  const status = ['Airing', 'Upcoming', 'Completed'];

  return (
    <div className="filter-section">
      <div className="filter-group">
        <h3>Format</h3>
        {formats.map(format => (
          <label key={format} className="filter-item">
            <input
              type="checkbox"
              onChange={(e) => onFilterChange('format', format, e.target.checked)}
            />
            {format}
          </label>
        ))}
      </div>
      
      <div className="filter-group">
        <h3>Status</h3>
        {status.map(item => (
          <label key={item} className="filter-item">
            <input
              type="checkbox"
              onChange={(e) => onFilterChange('status', item, e.target.checked)}
            />
            {item}
          </label>
        ))}
      </div>
    </div>
  );
};

export default FilterSection;