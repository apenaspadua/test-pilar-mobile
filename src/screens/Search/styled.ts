import { Platform, StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 20
  },
  movieContainer: {
    marginBottom: 20,
  },
  title: {
    alignSelf: 'center',
    marginTop: Platform.OS === 'android' ? 50 : 20
  },
});