import React from "react";
import { StyleSheet, Text, View } from 'react-native';

const PinkHeader = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Indicação de séries</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFC0CB', // Rosa claro
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    fontSize: 24,
    color: '#FF69B4', // Rosa médio
    fontWeight: 'bold',
  },
});

export default PinkHeader;