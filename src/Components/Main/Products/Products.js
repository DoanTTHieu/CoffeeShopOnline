<<<<<<< HEAD
import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsView from "./ProductsView";
import ProductDetail from "./ProductDetail";
=======
import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsView from './ProductsView';
import ProductDetail from './ProductDetail';]
>>>>>>> 3ab6da2cee12b907c1aea943490e32c955d2ab70

const Stack = createStackNavigator();

export default class ProductsScreen extends Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="ProductsView">
        <Stack.Screen
          name="ProductDetail"
          component={ProductDetail}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ProductsView"
          component={ProductsView}
          options={{ headerShown: false }}
          navigation={this.props.navigation}
        />
      </Stack.Navigator>
    );
  }
}
