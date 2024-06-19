import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/global';

export default StyleSheet.create({
    container: {
    flex: 1,
  },
  image: {
    height: 120,
    width: 80,
    borderRadius: 10,
  },
  originalName: {
    width: 80,
    fontSize: 12,
    marginTop: 8
  },
  characterName: {
    width: 80,
    color: globalStyles.colors.LIGHT_GRAY,
    fontSize: 10,
  },
  loadingIndicator: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
});
