import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import Topbar from '../Topbar';
import styled from './styled';

interface MainContainerProps {
  children: React.ReactNode;
  topbar?: boolean
} 

const MainContainer: React.FC<MainContainerProps> = ({ children, topbar }) => {
  return (
     <>
      { topbar && <Topbar />}
      <SafeAreaView style={styled.container}>
        <ScrollView >
          { children }
        </ScrollView>
      </SafeAreaView>
    </>
  );
}

export default MainContainer;