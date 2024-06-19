import React from 'react';
import { View } from 'react-native';

interface ItemSeparatorProps {
  height?: number,
  width?: number
}

const ItemSeparator: React.FC<ItemSeparatorProps> = ({ height = 0, width = 0 }) => {
  return <View style={{ width, height }} />;
};

export default ItemSeparator;
