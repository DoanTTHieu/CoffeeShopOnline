import React, { Component } from "react";
import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ContactScreen from "../screens/Main/Contact/Contact";
import CartScreen from "../screens/Main/Cart/CartView";
import ProductsScreen from "../screens/Main/Products/ProductsView";

const Tab = createBottomTabNavigator();
export default class TabNavigator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordersArray: [],
    };
  }
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;
              if (route.name === "Contact") {
                iconName = "md-person"; //focused ? "md-person" : "md-person";
              } else if (route.name === "Products") {
                iconName = "ios-cafe"; //focused ? "ios-cafe" : "ios-cafe";
              } else if (route.name === "Cart") {
                iconName = "md-cart"; //focused ? "md-cart" : "md-cart";
              }

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: "#f7c744",
            inactiveTintColor: "#203546",
          }}
        >
          <Tab.Screen name="Products" component={ProductsScreen} />
          <Tab.Screen name="Cart" component={CartScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </View>
    );
  }
}
