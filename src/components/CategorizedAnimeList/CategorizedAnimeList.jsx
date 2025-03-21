import React from 'react';
import AnimeCard from '../AnimeCard/AnimeCard';
import './CategorizedAnimeList.css';

const CategorizedAnimeList = ({ animeList }) => {
  // Group anime by type and status
  const groupedAnime = {
    'TV (NEW)': animeList.filter(anime => anime.type === 'TV' && !anime.continuing),
    'TV (Continuing)': animeList.filter(anime => anime.type === 'TV' && anime.continuing),
    'ONA': animeList.filter(anime => anime.type === 'ONA'),
    'OVA': animeList.filter(anime => anime.type === 'OVA'),
    'Movie': animeList.filter(anime => anime.type === 'Movie'),
    'Special': animeList.filter(anime => anime.type === 'Special')
  };

  return (
    <div className="categorized-list">
      {Object.entries(groupedAnime).map(([category, animeInCategory]) => (
        animeInCategory.length > 0 && (
          <div key={category} className="category-section">
            <h2 className="category-title">{category}</h2>
            <div className="anime-grid">
              {animeInCategory.map(anime => (
                <AnimeCard key={anime.mal_id} anime={anime} />
              ))}
            </div>
          </div>
        )
      ))}
    </div>
  );
};

export default CategorizedAnimeList;