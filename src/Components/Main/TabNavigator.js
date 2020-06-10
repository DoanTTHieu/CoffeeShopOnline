import React, { Component } from "react";
import {
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";

import ContactScreen from "./Contact/Contact";
import OrdersScreen from "./Orders/Orders";
import ProductsScreen from "./Products/Products";
import menu from "../../../assets/icons/menu.png";

const { height, width } = Dimensions.get("window");

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
        <View style={styles.wrapper}>
          <TouchableOpacity
            onPress={() => {
              this.props.navigation.openDrawer();
            }}
          >
            <Image source={menu} style={{ width: 30, height: 30 }} />
          </TouchableOpacity>
          <TextInput style={styles.textInput} placeholder="SEARCH" />
        </View>

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

const styles = StyleSheet.create({
  wrapper: {
    height: height / 15,
    backgroundColor: "#f7c744",
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-around",
  },
  textInput: {
    height: height / 25,
    width: width * 0.8,
    backgroundColor: "#FFF",
    paddingLeft: 10,
  },
  container: {
    backgroundColor: "rgb(32,53,70)",
    flex: 1,
    flexDirection: "column",
  },
});
