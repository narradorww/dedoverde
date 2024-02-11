import React from 'react';
import {
  FlatList,
  View,
  Image,
  Text,
  useWindowDimensions,
  ListRenderItem,
} from 'react-native';
import getStyles from './style';
import {mockdb} from '../../utils/mockdb';
import {Vegetable} from '../../utils/Interfaces';

const VegetableList = () => {
  const {width, height} = useWindowDimensions();
  const styles = getStyles(width, height);

  const renderItem: ListRenderItem<Vegetable> = ({item}) => (
    <View style={styles.sectionContainer}>
      <Image source={item.image} style={styles.image} resizeMode="contain" />
      <Text style={styles.sectionTitle}>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={mockdb as Vegetable[]}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  );
};

export default VegetableList;
