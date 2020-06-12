import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import OrdersView from "../screens/Main/Orders/OrdersView";
import ProductDetail from "../screens/Main/Products/ProductDetail";

const Stack = createStackNavigator();
export default class OrdersScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="OrdersView">
        <Stack.Screen name="ProductDetail" component={ProductDetail} />
        <Stack.Screen
          name="OrdersView"
          component={OrdersView}
          options={{ headerShown: false }}
          navigation={this.props.navigation}
          ordersArray={this.props.ordersArray}
        />
      </Stack.Navigator>
    );
  }
}
