import React from 'react';
import { View } from 'react-native';
import styled from './styled';
import { useNavigation } from '@react-navigation/native';
import Text from 'components/Text';
import MainContainer from 'components/MainContainer';
import MovieCard from 'components/MovieCard';
import Header from 'components/Header';
import { useNowPlayingMovies, useUpcomingMovies, useAllGenres, useMoviesByGenre } from 'hooks/useMovies';
import MovieList from 'components/MovieList';
import GenreList from 'components/GenreList';
import ItemSeparator from 'components/ItemSeparator';
import { useNavigationAction } from 'hooks/useNavigationAction';

const Home: React.FC = () => {
  const { navigateTo } = useNavigationAction();

  const nowPlayingMovies = useNowPlayingMovies();
  const upcomingMovies = useUpcomingMovies();
  const genres = useAllGenres();

  const [activeGenre, setActiveGenre] = React.useState<number>(10110);
  const { movies: filteredMovies, loading, error } = useMoviesByGenre(activeGenre);

  const moviesToShow = filteredMovies.length > 0 ? filteredMovies : nowPlayingMovies?.results;

  return (
    <MainContainer topbar>
      <Header />

      <View style={styled.headerContainer}>
        <Text subtitle bold>Now Showing</Text>
      </View>
      
      <GenreList
        data={genres}
        activeGenre={activeGenre}
        setActiveGenre={setActiveGenre}
      />

      {loading ? (
        <Text>Loading...</Text>
      ) : error ? (
        <Text>Error: {error}</Text>
      ) : (
        <MovieList
          data={moviesToShow}
          renderItem={({ item }) => (
            <MovieCard
              title={item.title}
              language={item.original_language}
              voteAverage={item.vote_average}
              voteCount={item.vote_count}
              poster={item.poster_path}
              heartLess={false}
              onPress={() => navigateTo('Movie', { movieId: item.id })}
            />
          )}
        />
      )}

      <View style={styled.headerContainer}>
        <Text subtitle bold>Coming Soon</Text>
      </View>

      <MovieList
        data={upcomingMovies?.results}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
            size={0.6}
            onPress={() => navigateTo('Movie', { movieId: item.id })}
            />
        )}
      />

      <ItemSeparator height={20}/>
    </MainContainer>
  );
};

export default Home;
