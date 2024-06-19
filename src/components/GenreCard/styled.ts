import { Dimensions, StyleSheet } from 'react-native';
import { globalStyles } from 'styles/global';

const { width } = Dimensions.get('screen');

const setWidth = (w: number): number => (width / 100) * w;

export default StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    backgroundColor:  globalStyles.colors.WHITE,
    paddingVertical: 8,
    elevation: 3,
    marginVertical: 2,
    width: setWidth(25),
  },
  genreText: {
    fontSize: 13,
    color:  globalStyles.colors.ACTIVE,
    fontFamily:  globalStyles.fonts.BOLD,
  },
});