import React, {useState} from 'react';
import {View, ScrollView, StyleSheet, ImageBackground} from 'react-native';

import {TextInput, Card} from 'react-native-paper';

type GridProps = {
  maxColumns: number;
};

const GridInput: React.FC<GridProps> = ({maxColumns}) => {
  const [numColumns, setNumColumns] = useState(1);
  const [numRows, setNumRows] = useState(1);

  const renderGrid = () => {
    let grid = [];
    for (let i = 0; i < numRows; i++) {
      let row = [];
      for (let j = 0; j < numColumns; j++) {
        row.push(
          <View key={`${i}-${j}`} style={styles.cell}>
            <ImageBackground
              source={require('../../assets/images/solo.png')}
              style={styles.cell}
              key={`${i}-${j}`}
            />
            {/* <Text>{`${i},${j}`}</Text> */}
          </View>,
        );
      }
      grid.push(
        <View key={`row-${i}`} style={styles.row}>
          {row}
        </View>,
      );
    }
    return grid;
  };

  return (
    <View style={styles.container}>
      <TextInput
        mode="flat" // Adiciona borda ao TextInput
        label="N de colunas (max 24)" // Usando 'label' em vez de 'placeholder'
        keyboardType="number-pad"
        onChangeText={text => {
          const num = Math.min(Number(text), maxColumns);
          if (!isNaN(num)) {
            setNumColumns(num);
          }
        }}
        style={styles.input}
      />
      <TextInput
        mode="flat"
        label="Número de linhas"
        keyboardType="number-pad"
        onChangeText={text => {
          const num = Number(text);
          if (!isNaN(num)) {
            setNumRows(num);
          }
        }}
        style={styles.input}
      />

      <ScrollView horizontal={true}>
        <ScrollView
          style={styles.gridContainer}
          contentContainerStyle={styles.gridContentContainer}>
          {renderGrid()}
        </ScrollView>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    width: '100%',
  },
  input: {
    height: 60,
    marginBottom: 10,
    paddingHorizontal: 5,
  },
  gridContainer: {
    flex: 1,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'flex-start',

    marginBottom: 1,
  },
  cell: {
    width: 70,
    height: 70,
    borderWidth: 1,
    borderColor: 'gray',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 1,
    backgroundColor: 'black',
  },
  gridContentContainer: {
    width: '100%', // Ajuste a largura conforme necessário
  },
});

export default GridInput;
