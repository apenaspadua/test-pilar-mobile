import { useNavigation } from '@react-navigation/native';
import { screensProps } from 'types/navigation';

export const useNavigationAction = () => {
  const navigation = useNavigation<screensProps>();

  const navigateTo = (screen: any, params?: object) => {
    navigation.navigate(screen, params);
  };

  const goBack = () => {
    navigation.goBack();
  };

  return { navigateTo, goBack };
};
