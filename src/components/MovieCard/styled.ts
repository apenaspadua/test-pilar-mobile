import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/global';

export default StyleSheet.create({
    container: {
    height: 340,
    width: 230,
    borderRadius: 12,
    elevation: 5,
    marginVertical: 2,
  },
  movieTitle: {
    color: globalStyles.colors.GRAY,
    paddingVertical: 2,
    marginTop: 5,
    width: 230,
  },
  movieSubTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  movieSubTitle: {
    fontSize: 12,
  },
  rowAndCenter: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  imdbContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-end',
    backgroundColor: globalStyles.colors.YELLOW,
    borderBottomLeftRadius: 5,
    borderTopRightRadius: 12,
    padding: 5
  },
  imdbImage: {
    height: 20,
    width: 50,
    borderBottomLeftRadius: 5,
  },
  imdbRating: {
    marginRight: 5,
    color: globalStyles.colors.HEART,
  },
  loadingIndicator: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center'
  }
});