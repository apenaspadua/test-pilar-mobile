import React from 'react';
import { FlatList, View } from 'react-native';
import GenreCard from 'components/GenreCard';
import ItemSeparator from 'components/ItemSeparator';
import styled from './styled';

interface GenreListProps {
  data: { id: number, name: string }[];
  activeGenre: number;
  setActiveGenre: React.Dispatch<React.SetStateAction<number>>;
}

const GenreList: React.FC<GenreListProps> = ({ data, activeGenre, setActiveGenre }) => {
  return (
    <View style={styled.genreListContainer}>
      <FlatList
        data={data}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        ItemSeparatorComponent={() => <ItemSeparator width={20} />}
        ListHeaderComponent={() => <ItemSeparator width={20} />}
        ListFooterComponent={() => <ItemSeparator width={20} />}
        renderItem={({ item }) => (
          <GenreCard
            genreName={item.name}
            active={item.id === activeGenre}
            onPress={() => setActiveGenre(item.id)}
          />
        )}
      />
    </View>
  );
};

export default GenreList;
