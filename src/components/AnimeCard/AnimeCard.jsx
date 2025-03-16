import React from 'react';
import './AnimeCard.css';

const AnimeCard = ({ anime }) => {
  const handleTitleClick = () => {
    window.open(anime.url, '_blank');
  };

  const formatDate = (dateString) => {
    if (!dateString) return 'TBA';
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
  };

  return (
    <div className="anime-card">
      <div className="anime-content">
        <div className="anime-image">
          <img src={anime.images.jpg.large_image_url} alt={anime.title} />
          <div className="anime-overlay">
            <div className="anime-score">{anime.score || 'N/A'}</div>
            <div className="anime-members">{(anime.members || 0).toLocaleString()} members</div>
          </div>
        </div>
        <div className="anime-details">
          <div className="title-container">
            <h3 onClick={handleTitleClick} className="anime-title">{anime.title_english || anime.title}</h3>
            {anime.title_english && anime.title_english !== anime.title && (
              <h4 className="anime-title-japanese">{anime.title}</h4>
            )}
          </div>
          
          <div className="anime-stats">
            {formatDate(anime.aired?.from)} • {anime.episodes || '?'} eps
          </div>

          <div className="anime-genres">
            {anime.genres?.map((genre, index) => (
              <span key={genre.mal_id} className="genre-tag">
                {genre.name}
              </span>
            ))}
          </div>

          <p className="synopsis">{anime.synopsis}</p>
        </div>
      </div>
    </div>
  );
};

export default AnimeCard;