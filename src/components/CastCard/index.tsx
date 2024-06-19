import React, { FC, useState } from 'react';
import { View, Image, ActivityIndicator } from 'react-native';
import styled from './styled';
import { getPoster } from 'utils/apiHelpers';
import { IMAGES } from 'constants/Images';
import Text from 'components/Text';
import { globalStyles } from 'styles/global';

interface CastCardProps {
  originalName: string;
  image: string;
  characterName: string;
}

const CastCard: FC<CastCardProps> = ({ originalName, image, characterName }) => {
  const [imageLoading, setImageLoading] = useState<boolean>(true);

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  return (
    <View style={styled.container}>
      {imageLoading && (
        <ActivityIndicator
          style={styled.loadingIndicator}
          size='large'
          color={globalStyles.colors.WHITE}
        />
      )}

      <Image
        source={image ? { uri: getPoster(image) } : IMAGES.NO_IMAGE}
        resizeMode={image ? 'cover' : 'contain'}
        style={styled.image}
        onLoad={handleImageLoad}
      />

      <Text bold style={styled.originalName}>
        {originalName}
      </Text>
      <Text bold style={styled.characterName}>
        {characterName}
      </Text>
    </View>
  );
};

export default CastCard;
