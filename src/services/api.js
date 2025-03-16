const BASE_URL = 'https://api.jikan.moe/v4';

export const getSeasonalAnime = async (season, year) => {
  try {
    const response = await fetch(`${BASE_URL}/seasons/${year}/${season}`);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return await response.json();
  } catch (error) {
    console.error('Error:', error);
    throw error;
  }
};