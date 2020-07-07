import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import CartView from "../screens/Main/Cart/CartView";
import ProductDetail from "../screens/Main/Products/ProductDetail";

const Stack = createStackNavigator();
export default class OrdersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="CartView">
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen
          name="CartView"
          component={CartView}
          options={{ headerShown: false }}
          navigation={this.props.navigation}
          ordersArray={this.props.ordersArray}
        />
      </Stack.Navigator>
    );
  }
}
