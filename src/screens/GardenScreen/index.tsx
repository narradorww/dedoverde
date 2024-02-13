import React from 'react';
import {View, StyleSheet, ImageBackground, Image} from 'react-native';
import {Card, Text} from 'react-native-paper';
import VegetableList from '../../components/VegetableList';
import GridInput from '../../components/GridInput';

const GardenScreen = () => {
  return (
    <ImageBackground
      source={require('../../assets/images/grama1.png')}
      style={styles.imgBackground}>
      <Card style={styles.card}>
        <Card.Content style={styles.cardContent}>
          <Image
            source={require('../../assets/images/farmer.png')}
            style={styles.cardContentImage}
          />
          {/* Envolver o Text em uma View para controlar o layout */}
          <View style={styles.textContent}>
            <Text>
              Olá, agricultor! Arraste a semente para um espaço no canteiro.
              Cada célula cultivada traz mais vida à sua horta. Repita até
              preencher todos os espaços!
            </Text>
          </View>
        </Card.Content>
      </Card>
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
  card: {
    margin: 8,
  },
  cardContent: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  cardContentImage: {
    width: 60,
    height: 60,
    marginRight: 8, // Adiciona espaço entre a imagem e o texto
  },
  textContent: {
    flexShrink: 1, // Permite que o texto encolha para evitar overflow
  },
  container: {
    flex: 1,
    flexDirection: 'row',
  },
  vegetableListContainer: {
    maxWidth: 200,
    margin: 8,
  },
  gridInputContainer: {
    flex: 1,
  },
});

export default GardenScreen;
