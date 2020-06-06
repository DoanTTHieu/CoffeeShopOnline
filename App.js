import React from 'react';
import { StyleSheet, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import TabNavigator from './src/Components/Main/TabNavigator.js';
//import OrdersHistory from './src/Components/Menu/OrdersHistory.js';
//import Auth from './src/Components/Main/Contact/Contact.js';       

StatusBar.setHidden(true);
export default function App() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
   );
}

// import React from 'react';
// import { StyleSheet, Text, View } from 'react-native';
// import OrdersHistory from './src/Components/Menu/OrdersHistory.js';
// import Auth from './src/Components/Auth/Auth.js';

// export default function App() {
//   return (
//     // <View style={styles.container}>
//     //   <Text>Halo!</Text>
//     // </View>
//     <Auth/>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
