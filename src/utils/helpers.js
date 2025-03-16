export const getCurrentSeason = () => {
  const month = new Date().getMonth() + 1;
  if (month >= 3 && month <= 5) return 'spring';
  if (month >= 6 && month <= 8) return 'summer';
  if (month >= 9 && month <= 11) return 'fall';
  return 'winter';
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const formatAiringTime = (timeString) => {
  if (!timeString) return 'TBA';
  const date = new Date(timeString);
  return date.toLocaleString('en-US', {
    weekday: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true
  });
};

export const filterAnime = (animeList, filters) => {
  return animeList.filter(anime => {
    if (filters.format.length && !filters.format.includes(anime.type)) return false;
    if (filters.status.length && !filters.status.includes(anime.status)) return false;
    return true;
  });
};