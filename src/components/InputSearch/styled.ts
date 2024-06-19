import { StyleSheet } from 'react-native';
import { globalStyles } from 'styles/global';

export default StyleSheet.create({
  textInputContainer: {
    margin: 20,
    flexDirection: 'row',
    backgroundColor: globalStyles.colors.WHITE,
    height: 56,
    borderRadius: 50,
    justifyContent: 'space-between',
  },
  textInput: {
    paddingStart: 20,
    width: '70%',
  },
  buttonContainer: {
    backgroundColor: globalStyles.colors.CIAN,
    height: 56,
    width: 110,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 50,
  }
});
