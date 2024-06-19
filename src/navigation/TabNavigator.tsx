import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeStackNavigator, SearchStackNavigator } from './StackNavigator';
import Octicons from '@expo/vector-icons/Octicons';
import { globalStyles } from 'styles/global';
import { IconMapping, IconName } from 'types/icons';

const Tab = createBottomTabNavigator();

const ICON_MAPPING: IconMapping = {
  HomeStack: 'home',
  SearchStack: 'search',
};

const TabNavigator: React.FC = () => {
  return (
      <Tab.Navigator
        screenOptions={({ route }) => ({
          headerShown: false,
          tabBarIcon: ({ color, size }) => {
            const iconName: IconName = ICON_MAPPING[route.name as keyof IconMapping];
            return <Octicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: 'white',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { 
            backgroundColor: globalStyles.colors.PRIMARY,
            borderTopWidth: 0,
          },
        })}
      >
        <Tab.Screen 
          name='HomeStack' 
          component={HomeStackNavigator} 
          options={{ tabBarLabel: 'Home' }} 
        />
        <Tab.Screen 
          name='SearchStack' 
          component={SearchStackNavigator} 
          options={{ tabBarLabel: 'Search' }} 
        />
      </Tab.Navigator>
  );
};

export default TabNavigator;
