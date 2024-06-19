import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import Text from 'components/Text';
import MainContainer from 'components/MainContainer';
import MovieCard from 'components/MovieCard';
import { IMAGES } from 'constants/Images';
import { useSearchMovie } from 'hooks/useMovies';
import InputSearch from 'components/InputSearch';
import styled from './styled';
import Loader from 'components/Loader';

interface SearchProps {
  route: any;
  navigation: any;
}

const Search: React.FC<SearchProps> = ({ navigation }) => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const { movies, loading, error } = useSearchMovie(searchQuery);

  const handleSearch = (inputValue: string) => {
    setSearchQuery(inputValue);
  };

  return (
    <MainContainer>
      <Text subtitle bold style={styled.title}>Search your favorite movies :)</Text>
      
      <InputSearch onPress={handleSearch} />
      
      <View style={styled.container}>
       { loading && <Loader/> }

       {movies.map((movie, index) => (
          <View style={styled.movieContainer} key={movie.id}>
            <MovieCard 
              title={movie.title}
              language={movie.original_language}
              voteAverage={movie.vote_average}
              voteCount={movie.vote_count}
              poster={movie.poster_path || IMAGES.NO_IMAGE}
              heartLess={false}
              size={0.7}
              onPress={() => navigation.navigate('Movie', { movieId: movie.id })}
            />
          </View>
        ))}

      </View>
    </MainContainer>
  );
}

export default Search;
