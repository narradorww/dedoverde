import React from 'react';
import {FlatList, View, Image, Text} from 'react-native';
import {mockdb} from '../../utils/mockdb';

// ... mockdb e importações de imagens aqui

const VegetableList = () => {
  const renderItem = ({item}) => (
    <View style={{flexDirection: 'row', alignItems: 'center', padding: 10}}>
      <Image
        source={item.image}
        style={{width: 40, height: 40, marginRight: 10}}
        resizeMode="contain"
      />
      <Text>{item.name}</Text>
    </View>
  );

  return (
    <FlatList
      data={mockdb}
      renderItem={renderItem}
      keyExtractor={item => item.name}
    />
  );
};

export default VegetableList;
