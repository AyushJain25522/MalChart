import React from 'react';
import './SortSection.css';

const SortSection = ({ totalAnime, onSortChange }) => {
  return (
    <div className="sort-section-container">
      <div className="total-anime">
        {totalAnime} titles
      </div>
      <div className="sort-section">
        <label>Sort by:</label>
        <select onChange={(e) => onSortChange(e.target.value)}>
          <option value="members">Members</option>
          <option value="score">Score</option>
          <option value="startDate">Start Date</option>
          <option value="title">Title</option>
          <option value="studio">Studio</option>
          <option value="licensor">Licensor</option>
        </select>
      </div>
    </div>
  );
};

export default SortSection;