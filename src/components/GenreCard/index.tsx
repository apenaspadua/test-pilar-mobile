import React, { FC } from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { globalStyles } from 'styles/global';
import styled from './styled';

interface GenreCardProps {
  genreName: string;
  active: boolean;
  onPress: (genreName: string) => void;
}

const GenreCard: FC<GenreCardProps> = ({ genreName, active, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        ...styled.container,
        backgroundColor: active ? globalStyles.colors.ACTIVE :  globalStyles.colors.WHITE,
      }}
      activeOpacity={0.5}
      onPress={() => onPress(genreName)}
    >
      <Text
        style={{
          ...styled.genreText,
          color: active ?  globalStyles.colors.WHITE :  globalStyles.colors.BLACK,
        }}
      >
        {genreName}
      </Text>
    </TouchableOpacity>
  );
};

export default GenreCard;