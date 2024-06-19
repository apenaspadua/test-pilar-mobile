import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import {  
  Inter_400Regular,
  Inter_500Medium,
  Inter_700Bold
} from '@expo-google-fonts/inter';
import React from 'react';
import TabNavigator from 'navigation/TabNavigator';

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_700Bold
  });
  
  React.useEffect(() => {
    SplashScreen.preventAutoHideAsync();

    const simulateAsyncSetup = async () => {
      await new Promise(resolve => setTimeout(resolve, 2000));
      SplashScreen.hideAsync();
    };
    
    simulateAsyncSetup();
  }, []);

  if (!fontsLoaded) {
    return null;
  }
  
  return (
    <NavigationContainer>
      <StatusBar style='light'/>
      <TabNavigator />
    </NavigationContainer>
  );
}