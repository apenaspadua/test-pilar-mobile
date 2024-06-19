import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/global';

export default StyleSheet.create({
  container: {
    flex: 1,
  },
  linearGradient: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    backgroundColor: globalStyles.colors.TRANSPARENT_PRIMARY
  },
  text: {
    padding: 20,
  },
});
