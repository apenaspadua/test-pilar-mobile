import React from 'react';
import { Image, SafeAreaView, View } from 'react-native';
import { globalStyles } from 'styles/global';
import styled from './styled';
import { IMAGES } from 'constants/Images';

const Topbar: React.FC = () => {
  return (
    <View style={styled.container}>
      <SafeAreaView>
        <Image source={IMAGES.TMBD} style={styled.logo} resizeMode='contain'/>
      </SafeAreaView>
    </View>
  );
}

export default Topbar;