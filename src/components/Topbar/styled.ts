import { Platform, StyleSheet } from 'react-native';
import { globalStyles } from 'styles/global';

export default StyleSheet.create({
    container: {
    backgroundColor: globalStyles.colors.PRIMARY,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    height: 54,
    width: 54, 
    marginBottom: 10,
    marginTop: Platform.OS === 'android' ? 40 : 0 
  },

});
