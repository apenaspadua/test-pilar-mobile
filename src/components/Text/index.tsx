import React from 'react';
import { Text as TextRN, TextStyle } from 'react-native';
import { globalStyles } from 'styles/global';

interface TextProps {
  children: any,
  title?: boolean;
  subtitle?: boolean;
  regular?: boolean; 
  bold?: boolean;
  style?: TextStyle;
  color?: string;
}

const Text: React.FC<TextProps> = ({
  children,
  title = false,
  subtitle = false,
  regular = false,
  bold = false,
  color,
  style,
}) => {
  const textStyle: TextStyle = {
    fontSize: title ? 42 : subtitle ? 24 : regular ? 14 : 18,
    fontFamily: bold ? globalStyles.fonts.BOLD : regular ? globalStyles.fonts.REGULAR : globalStyles.fonts.MEDIUM,
    color: color || globalStyles.colors.WHITE,
    ...style,
  };

  return (
    <TextRN style={textStyle} >
      {children}
    </TextRN>
  );
};

export default Text;
