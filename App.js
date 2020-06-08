import React from 'react';
import { StatusBar,Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MenuDrawer from './src/Components/Main/MenuDrawer.js';

import TabNavigator from './src/Components/Main/TabNavigator.js';
//import OrdersHistory from './src/Components/Menu/OrdersHistory.js';
//import Auth from './src/Components/Main/Contact/Contact.js';       

StatusBar.setHidden(true);
export default function App() {
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
   );
}

