import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from 'screens/Home';
import Movie from 'screens/Movie';
import Search from 'screens/Search';

const Stack = createStackNavigator();

export function HomeStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Home'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Movie' component={Movie} />
    </Stack.Navigator>
  );
}

export function SearchStackNavigator() {
  return (
    <Stack.Navigator
      initialRouteName='Search'
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name='Search' component={Search} />
      <Stack.Screen name='Movie' component={Movie} />
    </Stack.Navigator>
  );
}
