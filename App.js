import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

import MenuDrawer from "./src/navigation/MenuNavigator";
import Auth from "./src/screens/Auth/Auth";

StatusBar.setHidden(true);

export default class App extends React.Component {
  render() {
    return (
      // <NavigationContainer>
      //   <MenuDrawer />
      // </NavigationContainer>
      <Auth />
    );
  }
}
