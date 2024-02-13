import React from 'react';
import {View, StyleSheet, ImageBackground} from 'react-native';
import VegetableList from '../../components/VegetableList';
import GridInput from '../../components/GridInput';

const GardenScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/grama1.png')}
      style={styles.imgBackground}>
      <View style={styles.container}>
        <View style={styles.vegetableListContainer}>
          <VegetableList />
        </View>
        <View style={styles.gridInputContainer}>
          <GridInput maxColumns={24} />
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  imgBackground: {
    flex: 1,
    resizeMode: 'cover',
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  vegetableListContainer: {
    // Largura fixa para VegetableList
    maxWidth: 200, // Mantém o tamanho fixo conforme necessário
    margin: 8,
  },
  gridInputContainer: {
    flex: 1, // Garante que ocupe todo o espaço restante
  },
});

export default GardenScreen;
