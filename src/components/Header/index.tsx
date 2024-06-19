import React, { useState } from 'react';
import { ImageBackground, TextInput, TouchableOpacity, View } from 'react-native';
import styled from './styled';
import Text from 'components/Text';
import { globalStyles } from 'styles/global';
import ItemSeparator from 'components/ItemSeparator';
import { getRandomImage } from 'constants/Images';

const Header: React.FC = () => {
  const randomImage = getRandomImage();

  return (
    <ImageBackground 
      source={ randomImage }
      style={styled.container}
      resizeMode='cover'
    >
      <View style={styled.linearGradient}/>

      <View style={styled.text}>
        <Text title bold color={globalStyles.colors.WHITE}>Welcome :)</Text>
        <ItemSeparator height={20}/>
        <Text subtitle color={globalStyles.colors.WHITE}>
         {`Millions of films, series and people to discover.\n\nExplore now.`}
        </Text>
      </View>
    </ImageBackground>
  );
}

export default Header;
