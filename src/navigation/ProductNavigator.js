import React, { Component } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import ProductsView from "../screens/Main/Products/ProductsView";
import ProductDetail from "../screens/Main/Products/ProductDetail";

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
