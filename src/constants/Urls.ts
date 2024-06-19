import { projectConfig } from '../../package.json';

const TMDB_BASE_URL: string = 'https://api.themoviedb.org/3';
const TMDB_IMAGE_BASE_URL: string = 'https://image.tmdb.org/t/p';
const YOUTUBE_BASE_URL: string = 'https://www.youtube.com/watch';

const TMDB_API_KEY: string = projectConfig.apiKey;

const ENDPOINTS = {
  NOW_PLAYING_MOVIES: '/movie/now_playing',
  UPCOMING_MOVIES: '/movie/upcoming',
  GENRES: '/genre/movie/list',
  MOVIE: '/movie',
  SEARCH_MOVIE: '/search/movie',
  DISCOVER_MOVIE: '/discover/movie'
};

const APPEND_TO_RESPONSE = {
  VIDEOS: 'videos',
  CREDITS: 'credits',
  RECOMMENDATIONS: 'recommendations',
  SIMILAR: 'similar',
};

export {
  TMDB_BASE_URL,
  TMDB_API_KEY,
  TMDB_IMAGE_BASE_URL,
  ENDPOINTS,
  APPEND_TO_RESPONSE,
  YOUTUBE_BASE_URL,
};
