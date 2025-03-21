import React, { useState, useEffect } from 'react';
import { getSeasonalAnime } from '../../services/animeService';
import SortSection from '../SortSection/SortSection';
import CategorizedAnimeList from '../CategorizedAnimeList/CategorizedAnimeList';
import { getCurrentSeason, getCurrentYear } from '../../utils/helpers';
import './SeasonalChart.css';

const SeasonalChart = () => {  // Remove props since we'll use internal state
  const [allAnimeList, setAllAnimeList] = useState([]);
  const [displayedAnime, setDisplayedAnime] = useState([]);
  const [currentSeason, setCurrentSeason] = useState(getCurrentSeason());
  const [currentYear, setCurrentYear] = useState(getCurrentYear());
  const [sortBy, setSortBy] = useState('members');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setDisplayedAnime([]); // Clear current list
    fetchAnime();
  }, [currentSeason, currentYear]);

  const fetchAnime = async () => {
    try {
      setIsLoading(true);
      const data = await getSeasonalAnime(currentYear, currentSeason);
      
      // Sort initially by members
      const sortedData = [...data].sort((a, b) => (b.members || 0) - (a.members || 0));
      setAllAnimeList(sortedData);
      
      // Load first batch immediately
      setDisplayedAnime(sortedData.slice(0, 20));
      
      // Load remaining anime with slight delay
      setTimeout(() => {
        setDisplayedAnime(sortedData);
        setIsLoading(false);
      }, 500);
    } catch (error) {
      console.error('Error fetching anime:', error);
      setIsLoading(false);
    }
  };

  const handleSort = (sortType) => {
    setSortBy(sortType);
    const sortedAnime = [...allAnimeList].sort((a, b) => {
      switch (sortType) {
        case 'members':
          return (b.members || 0) - (a.members || 0);
        case 'score':
          return ((b.score || 0) - (a.score || 0)) || ((b.members || 0) - (a.members || 0));
        case 'startDate':
          const dateA = new Date(a.aired?.from || '9999');
          const dateB = new Date(b.aired?.from || '9999');
          return dateA - dateB;
        case 'title':
          return (a.title_english || a.title).localeCompare(b.title_english || b.title);
        case 'studio':
          const studioA = a.studios?.[0]?.name || 'zzz';
          const studioB = b.studios?.[0]?.name || 'zzz';
          return studioA.localeCompare(studioB);
        default:
          return 0;
      }
    });
    
    setAllAnimeList(sortedAnime);
    setDisplayedAnime(sortedAnime); // Update displayed anime immediately after sorting
  };

  return (
    <div className="seasonal-chart">
      <SortSection 
        totalAnime={allAnimeList.length} 
        onSortChange={handleSort}
      />
      <CategorizedAnimeList 
        animeList={displayedAnime}
        isLoading={isLoading}
      />
    </div>
  );
};

export default SeasonalChart;