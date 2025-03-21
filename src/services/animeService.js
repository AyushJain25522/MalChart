const isDevelopment = process.env.NODE_ENV === 'development';

const CACHE_DURATION = 24 * 60 * 60 * 1000;

const getCachedData = (key) => {
  if (isDevelopment) return null;
  
  const cached = localStorage.getItem(key);
  if (!cached) return null;
  const { data, timestamp } = JSON.parse(cached);
  return Date.now() - timestamp > CACHE_DURATION ? null : data;
};

const setCachedData = (key, data) => {
  if (isDevelopment) return;
  
  localStorage.setItem(key, JSON.stringify({
    data,
    timestamp: Date.now()
  }));
};

export const getSeasonalAnime = async (year, season) => {
  try {
    const cacheKey = `seasonal_${year}_${season}`;
    const cachedData = getCachedData(cacheKey);
    if (cachedData) return cachedData;

    let allAnime = [];
    let page = 1;
    let hasNextPage = true;

    // Fetch all pages without delay in development
    while (hasNextPage) {
      const response = await fetch(`https://api.jikan.moe/v4/seasons/${year}/${season}?page=${page}`);
      const data = await response.json();
      
      if (data.data?.length > 0) {
        allAnime = [...allAnime, ...data.data];
        hasNextPage = data.pagination?.has_next_page;
        page++;
      } else {
        hasNextPage = false;
      }
    }

    const uniqueAnime = Array.from(
      new Set(allAnime.map(a => a.mal_id))
    ).map(id => allAnime.find(a => a.mal_id === id));

    setCachedData(cacheKey, uniqueAnime);
    return uniqueAnime;
  } catch (error) {
    console.error('API Error:', error);
    return [];
  }
};