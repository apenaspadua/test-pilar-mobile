import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Linking,
  FlatList,
  Share,
} from 'react-native';

import { Feather, Ionicons } from '@expo/vector-icons';
import { APPEND_TO_RESPONSE as AR } from 'constants/Urls';
import { globalStyles } from 'styles/global';
import ItemSeparator from 'components/ItemSeparator';
import CastCard from 'components/CastCard';
import MovieCard from 'components/MovieCard';
import styled from './styled';
import { getLanguage, getPoster, getVideo } from 'utils/apiHelpers';
import { useMovieById } from 'hooks/useMovies';
import Text from 'components/Text';
import MovieList from 'components/MovieList';
import Loader from 'components/Loader';
import { useNavigationAction } from 'hooks/useNavigationAction';

const { height } = Dimensions.get('window');

const setHeight = (h: number): number => (height / 100) * h;

interface MovieProps {
  route: any;
}

const Movie: React.FC<MovieProps> = ({ route }) => {
  const { navigateTo, goBack } = useNavigationAction();

  const { movieId } = route.params;

  const movie = useMovieById(
    movieId, `${AR.VIDEOS},${AR.CREDITS},${AR.RECOMMENDATIONS},${AR.SIMILAR}`
  );  

  const [isCastSelected, setIsCastSelected] = useState<boolean>(true);

  return (
    <ScrollView style={styled.container} showsVerticalScrollIndicator={false}>
       { !movie && <Loader/> }

      {!movie?.backdrop_path ? (
        <>
         <View style={styled.headerContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => goBack()}
            >
              <Feather name='chevron-left' size={35} color={globalStyles.colors.WHITE} />
            </TouchableOpacity>
          </View>
        
          <ItemSeparator height={setHeight(12)} />
        </>
      ) : (
        <>
          <View style={styled.moviePosterImageContainer}>
            <Image
              style={styled.moviePosterImage}
              resizeMode='cover'
              source={{ uri: getPoster(movie?.backdrop_path) }}
            />
          </View>

          <View style={styled.headerContainer}>
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() => goBack()}
            >
              <Feather name='chevron-left' size={35} color={globalStyles.colors.WHITE} />
            </TouchableOpacity>
          
            <TouchableOpacity
              activeOpacity={0.5}
              onPress={() =>
                Share.share({ message: `${movie?.title}\n\n${movie?.homepage}` })
              }
            >
              <Text bold>Share</Text>
            </TouchableOpacity>
          </View>

          <TouchableOpacity
            style={styled.playButton}
            onPress={() => Linking.openURL(getVideo(movie?.videos.results[0].key))}
          >
            <Ionicons name='play-circle-outline' size={70} color={globalStyles.colors.WHITE} />
          </TouchableOpacity>
        
          <ItemSeparator height={setHeight(37)} />
        </>
      )}

      <View style={styled.movieTitleContainer}>
        <Text subtitle bold style={styled.movieTitle}>
          {movie?.original_title}
        </Text>
        <View style={styled.row}>
          <Ionicons name='heart' size={22} color={globalStyles.colors.HEART} />
          <Text bold style={styled.ratingText}>{movie?.vote_average}</Text>
        </View>
      </View>
      
      <Text style={styled.genreText}>
        {movie?.genres?.map((genre: any) => genre?.name)?.join(', ')} |{' '}
        {movie?.runtime} Min
      </Text>
      
      <Text style={styled.genreText}>
        {getLanguage(movie?.original_language)?.english_name}
      </Text>
      
      <View style={styled.overviewContainer}>
        <Text bold>Overview</Text>
        <Text style={styled.overviewText}>{movie?.overview}</Text>
      </View>
    
      <View>
        <Text bold style={styled.castTitle}>Cast</Text>
        <View style={styled.castSubMenuContainer}>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsCastSelected(true)}
          >
            <Text
              style={{
                ...styled.castSubMenuText,
                color: isCastSelected ? globalStyles.colors.WHITE : globalStyles.colors.LIGHT_GRAY,
              }}
            >
              Cast
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            onPress={() => setIsCastSelected(false)}
          >
            <Text
              style={{
                ...styled.castSubMenuText,
                color: isCastSelected ? globalStyles.colors.LIGHT_GRAY : globalStyles.colors.WHITE,
              }}
            >
              Crew
            </Text>
          </TouchableOpacity>
        </View>
        
        <FlatList
          style={{ marginVertical: 5 }}
          data={isCastSelected ? movie?.credits?.cast : movie?.credits?.crew}
          keyExtractor={(item: any) => item?.credit_id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ListHeaderComponent={() => <ItemSeparator width={20} />}
          ItemSeparatorComponent={() => <ItemSeparator width={20} />}
          ListFooterComponent={() => <ItemSeparator width={20} />}
          renderItem={({ item }: any) => (
            <CastCard
              originalName={item?.name}
              characterName={isCastSelected ? item?.character : item?.job}
              image={item?.profile_path}
            />
          )}
        />
      </View>
    
      {movie?.recommendations?.results.length !== 0 && <Text bold style={styled.extraListTitle}>Recommended Movies</Text>}

      <MovieList
        data={movie?.recommendations?.results}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
            heartLess={false}
            size={0.6}
            onPress={() => navigateTo('Movie', { movieId: item.id })}
          />
        )}
      />

      {movie?.similar?.results.length !== 0 && <Text bold style={styled.extraListTitle}>Similar Movies</Text>}

      <MovieList
        data={movie?.similar?.results}
        renderItem={({ item }) => (
          <MovieCard
            title={item.title}
            language={item.original_language}
            voteAverage={item.vote_average}
            voteCount={item.vote_count}
            poster={item.poster_path}
            heartLess={false}
            size={0.6}
            onPress={() => navigateTo('Movie', { movieId: item.id })}
          />
        )}
      />
    </ScrollView>
  );
};

export default Movie;