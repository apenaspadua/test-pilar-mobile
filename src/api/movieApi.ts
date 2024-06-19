import axios, { AxiosInstance } from 'axios';
import { TMDB_BASE_URL, TMDB_API_KEY } from 'constants/Urls';

const TMDB_HTTP_REQUEST: AxiosInstance = axios.create({
  baseURL: TMDB_BASE_URL,
  params: {
    api_key: TMDB_API_KEY,
  },
});

export default TMDB_HTTP_REQUEST;
