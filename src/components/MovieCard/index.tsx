import React, { useState } from 'react';
import {
  View,
  TouchableOpacity,
  TouchableNativeFeedback,
  ImageBackground,
  Image,
  ActivityIndicator,
} from 'react-native';

import { Ionicons } from '@expo/vector-icons';
import { globalStyles } from 'styles/global';
import styled from './styled';
import { getLanguage, getPoster } from 'utils/apiHelpers';
import { IMAGES } from 'constants/Images';
import Text from 'components/Text';

interface MovieCardProps {
  title: string;
  poster: string;
  language: string;
  voteAverage: number;
  voteCount: number;
  size?: number;
  heartLess?: boolean;
  onPress?: () => void;
}

const MovieCard: React.FC<MovieCardProps> = ({
  title,
  poster,
  language,
  voteAverage,
  voteCount,
  size = 1,
  heartLess = true,
  onPress,
}) => {
  const [liked, setLiked] = useState<boolean>(false);
  const [voteCountValue, setVoteCountValue] = useState<number>(voteCount);
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  const backgroundImage = poster ? { uri: getPoster(poster) } : IMAGES.NO_IMAGE;

  return (
    <TouchableOpacity activeOpacity={0.8} onPress={onPress}>
      <ImageBackground
        style={{ ...styled.container, width: 230 * size, height: 340 * size }}
        imageStyle={{ borderRadius: 12 }}
        source={backgroundImage}
        onLoad={handleImageLoad}
      >
        {imageLoading && (
          <View style={styled.loadingIndicator}>
            <ActivityIndicator size='large' color={globalStyles.colors.WHITE} />
          </View>
        )}

        <View style={{ ...styled.imdbContainer, paddingVertical: 3 * size }}>
          <Image
            source={IMAGES.IMDB}
            resizeMode='cover'
            style={{ ...styled.imdbImage, height: 20 * size, width: 50 * size }}
          />
          <Text
            style={{
              ...styled.imdbRating,
              marginRight: 5 * size,
              fontSize: 14 * size,
            }}
          >
            {voteAverage}
          </Text>
        </View>
        {!heartLess ? (
          <TouchableNativeFeedback
            onPress={() => {
              setLiked(!liked);
              setVoteCountValue(liked ? voteCountValue - 1 : voteCountValue + 1);
            }}
          >
            <Ionicons
              name={liked ? 'heart' : 'heart-outline'}
              size={25 * size}
              color={liked ? globalStyles.colors.HEART : globalStyles.colors.WHITE}
              style={{ position: 'absolute', bottom: 10, left: 10 }}
            />
          </TouchableNativeFeedback>
        ) : null}
      </ImageBackground>
      <View>
        <Text
          regular
          style={{ ...styled.movieTitle, width: 230 * size }}
        >
          {title}
        </Text>
        <View style={styled.movieSubTitleContainer}>
          <Text style={styled.movieSubTitle}>
            {getLanguage(language as any)?.english_name}
          </Text>
          <View style={styled.rowAndCenter}>
            <Ionicons
              name='heart'
              size={17 * size}
              color={globalStyles.colors.HEART}
              style={{ marginRight: 5 }}
            />
            <Text style={styled.movieSubTitle}>{voteCountValue}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default MovieCard;
