import { StackNavigationProp } from '@react-navigation/stack';

interface Navigation {
  Home: undefined;
  Movie: undefined;
  Search: undefined;
};

export type screensProps = Navigation<StackParamList>;

