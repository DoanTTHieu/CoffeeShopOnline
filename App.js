import React from 'react';
import { StatusBar} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import MenuDrawer from './src/Components/Main/MenuDrawer.js';
import TabNavigator from './src/Components/Main/TabNavigator.js';

StatusBar.setHidden(true);

export default class App extends React.Component {
  return (
    <NavigationContainer>
      <MenuDrawer />
    </NavigationContainer>
   );
}

