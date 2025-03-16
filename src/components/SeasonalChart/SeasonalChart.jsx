import React, { useState, useEffect } from 'react';
import './SeasonalChart.css';
import AnimeCard from '../AnimeCard/AnimeCard';
import { getSeasonalAnime } from '../../services/api';
import { getCurrentSeason, getCurrentYear } from '../../utils/helpers';

const SeasonalChart = () => {
  const [animeList, setAnimeList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [currentSeason, setCurrentSeason] = useState(getCurrentSeason());
  const [currentYear, setCurrentYear] = useState(getCurrentYear());

  useEffect(() => {
    fetchSeasonalAnime(currentSeason, currentYear);
  }, [currentSeason, currentYear]);

  const fetchSeasonalAnime = async (season, year) => {
    setLoading(true);
    try {
      const data = await getSeasonalAnime(season, year);
      setAnimeList(data.data);
    } catch (error) {
      console.error('Error fetching seasonal anime:', error);
    }
    setLoading(false);
  };

  const handleSeasonChange = (season) => {
    setCurrentSeason(season);
  };

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="seasonal-chart">
      <div className="anime-list">
        {animeList.map((anime) => (
          <AnimeCard key={anime.mal_id} anime={anime} />
        ))}
      </div>
    </div>
  );
};

export default SeasonalChart;