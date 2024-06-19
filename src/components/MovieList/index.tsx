import ItemSeparator from 'components/ItemSeparator';
import React from 'react';
import { FlatList } from 'react-native';

interface MovieListProps {
  data?: any[];
  renderItem: ({ item }: { item: any }) => JSX.Element;
}

const MovieList: React.FC<MovieListProps> = ({ data, renderItem }) => {
  return (
    <FlatList
      data={data}
      horizontal
      showsHorizontalScrollIndicator={false}
      keyExtractor={(item) => item.id.toString()}
      ItemSeparatorComponent={() => <ItemSeparator width={20} />}
      ListHeaderComponent={() => <ItemSeparator width={20} />}
      ListFooterComponent={() => <ItemSeparator width={20} />}
      renderItem={renderItem}
    />
  );
};

export default MovieList;
