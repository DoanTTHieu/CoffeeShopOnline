import React, { Component } from "react";
import {View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ContactScreen from "../screens/Main/Contact/Contact";
import OrdersScreen from "./OrdersNavigator";
import ProductsScreen from "./ProductNavigator";

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
                iconName = focused ? "md-person" : "md-person";
              } else if (route.name === "Products") {
                iconName = focused ? "ios-cafe" : "ios-cafe";
              } else if (route.name === "Orders") {
                iconName = focused ? "ios-list-box" : "ios-list";
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
          <Tab.Screen name="Orders" component={OrdersScreen} />
          <Tab.Screen name="Contact" component={ContactScreen} />
        </Tab.Navigator>
      </View>
    );
  }
}
