import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";

// import MenuNavigator from "./src/navigation/MenuNavigator";
// import Auth from "./src/screens/Auth/Auth";

import LoginNavigator from "./src/navigation/LoginHomeNavigator";

StatusBar.setHidden(true);

export default class App extends React.Component {
  render() {
    return (
      <NavigationContainer>
        {/* <MenuNavigator /> */}
        <LoginNavigator />
      </NavigationContainer>
      // <Auth />
    );
  }
}
