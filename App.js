import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import OrdersHistory from './src/Components/Menu/OrdersHistory.js';
import Auth from './src/Components/Auth/Auth.js';

export default function App() {
  return (
    // <View style={styles.container}>
    //   <Text>Halo!</Text>
    // </View>
    <Auth/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
