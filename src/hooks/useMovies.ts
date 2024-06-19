import { useEffect, useState } from 'react';
import TMDB_HTTP_REQUEST from 'api/movieApi';
import { ENDPOINTS } from 'constants/Urls';
import { NowMovies } from 'types/now_movies';
import { Upcoming } from 'types/upcoming';
import { Movie } from 'types/movie';

const useNowPlayingMovies = () => {
  const [nowPlayingMovies, setNowPlayingMovies] = useState<NowMovies | null>(null);

  useEffect(() => {
    const fetchNowPlayingMovies = async () => {
      try {
        const response = await TMDB_HTTP_REQUEST.get(ENDPOINTS.NOW_PLAYING_MOVIES);
        setNowPlayingMovies(response.data);
      } catch (error) {
        console.error('Error fetching now playing movies:', error);
        setNowPlayingMovies(null);
      }
    };

    fetchNowPlayingMovies();
  }, []);

  return nowPlayingMovies;
};

const useUpcomingMovies = () => {
  const [upcomingMovies, setUpcomingMovies] = useState<Upcoming | null>(null);

  useEffect(() => {
    const fetchUpcomingMovies = async () => {
      try {
        const response = await TMDB_HTTP_REQUEST.get(ENDPOINTS.UPCOMING_MOVIES);
        setUpcomingMovies(response.data);
      } catch (error) {
        console.error('Error fetching upcoming movies:', error);
        setUpcomingMovies(null);
      }
    };

    fetchUpcomingMovies();
  }, []);

  return upcomingMovies;
};

const useMovieById = (movieId: number, append_to_response: string = '') => {
  const [movie, setMovie] = useState<Movie | null>(null);

  useEffect(() => {
    const fetchMovieById = async () => {
      try {
        const response = await TMDB_HTTP_REQUEST.get(`${ENDPOINTS.MOVIE}/${movieId}`, {
          params: append_to_response ? { append_to_response } : undefined,
        });
        setMovie(response.data);
      } catch (error) {
        console.error(`Error fetching movie with ID ${movieId}:`, error);
        setMovie(null);
      }
    };

    fetchMovieById();
  }, [movieId, append_to_response]);  

  return movie;
};

const useAllGenres = () => {
  const [genres, setGenres] = useState<any[]>([{ id: 10110, name: 'All' }]);

  useEffect(() => {
    const fetchAllGenres = async () => {
      try {
        const response = await TMDB_HTTP_REQUEST.get(ENDPOINTS.GENRES);
        setGenres([...genres, ...response.data.genres]);
      } catch (error) {
        console.error('Error fetching genres:', error);
      }
    };

    fetchAllGenres();
  }, []);

  return genres;
};

const useSearchMovie = (query: string) => {
  const [movies, setMovies] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (query.length === 0) {
      setMovies([]);
      return;
    }

    const fetchMovies = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await TMDB_HTTP_REQUEST.get(ENDPOINTS.SEARCH_MOVIE, {
          params: { query },
        });
        setMovies(response.data.results);
      } catch (err) {
        setError('Failed to fetch movies');
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [query]);

  return { movies, loading, error };
};

const useMoviesByGenre = (genreId: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!genreId) return;

    const fetchMoviesByGenre = async () => {
      setLoading(true);
      setError(null);
      try {
        const response = await TMDB_HTTP_REQUEST.get(ENDPOINTS.DISCOVER_MOVIE, {
          params: { with_genres: genreId },
        });
        console.log(response.data);
        
        setMovies(response.data.results);
      } catch (err) {
        setError('Failed to fetch movies by genre');
      } finally {
        setLoading(false);
      }
    };

    fetchMoviesByGenre();
  }, [genreId]);

  return { movies, loading, error };
};

export { 
  useNowPlayingMovies, 
  useUpcomingMovies, 
  useMovieById, 
  useAllGenres,
  useSearchMovie,
  useMoviesByGenre
};
