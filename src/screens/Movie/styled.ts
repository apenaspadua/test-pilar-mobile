import { Dimensions, StyleSheet } from 'react-native';
import { globalStyles } from 'styles/global';

const { height, width } = Dimensions.get('window');

const setHeight = (h: number): number => (height / 100) * h;
const setWidth = (w: number): number => (width / 100) * w;

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: globalStyles.colors.BASIC_BACKGROUND,
  },
  moviePosterImageContainer: {
    height: setHeight(35),
    width: setWidth(145),
    alignItems: 'center',
    position: 'absolute',
    left: setWidth((100 - 145) / 2),
    top: 0,
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    elevation: 8,
  },
  moviePosterImage: {
    borderBottomRightRadius: 300,
    borderBottomLeftRadius: 300,
    width: setWidth(145),
    height: setHeight(35),
  },
  linearGradient: {
    width: setWidth(100),
    height: setHeight(6),
    position: 'absolute',
    top: 0,
    elevation: 9,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
    position: 'absolute',
    right: 0,
    left: 0,
    top: 50,
    elevation: 20,
  },
  playButton: {
    position: 'absolute',
    top: 110,
    left: setWidth(50) - 70 / 2,
    elevation: 10,
  },
  movieTitleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  movieTitle: {
    width: setWidth(60),
  },
  ratingText: {
    marginLeft: 5,
    fontSize: 15,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  genreText: {
    color: globalStyles.colors.LIGHT_GRAY,
    paddingHorizontal: 20,
    paddingTop: 5,
    fontSize: 13,
  },
  overviewContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginVertical: 10,
  },
  overviewText: {
    color: globalStyles.colors.LIGHT_GRAY,
    paddingVertical: 5,
    fontSize: 13,
    textAlign: 'justify',
  },
  castTitle: {
    marginLeft: 20,
  },
  castSubMenuContainer: {
    marginLeft: 20,
    flexDirection: 'row',
    marginVertical: 5,
  },
  castSubMenuText: {
    marginRight: 10,
    fontSize: 13,
  },
  extraListTitle: {
    marginLeft: 20,
    fontSize: 18,
    marginVertical: 8,
  },
});