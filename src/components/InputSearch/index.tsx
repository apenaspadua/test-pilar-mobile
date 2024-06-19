import React, { useState } from 'react';
import { TextInput, TouchableOpacity, View } from 'react-native';
import Text from 'components/Text';
import { globalStyles } from 'styles/global';
import styled from './styled';

interface InputSearchProps {
  onPress?: (inputValue: string) => void;
}

const InputSearch: React.FC<InputSearchProps> = ({ onPress }) => {
  const [inputValue, setInputValue] = useState<string>('');

  const handlePress = () => {
    if (onPress) {
      onPress(inputValue);
    }
  };

  return (
    <View style={styled.textInputContainer}>
      <TextInput 
        placeholder='Ex: Harry Potter'
        style={styled.textInput}
        value={inputValue}
        onChangeText={setInputValue}
      />
      <TouchableOpacity 
        style={styled.buttonContainer} 
        onPress={handlePress} 
      >
        <Text color={globalStyles.colors.WHITE}>Search</Text>
      </TouchableOpacity>
    </View>
  );
}

export default InputSearch;
