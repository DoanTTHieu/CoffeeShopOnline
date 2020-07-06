import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Auth from "../navigation/AuthNavigation";
import Menu from "../navigation/MenuNavigator";
import SuccessfulValidation from "../screens/Auth/SuccessfulValidationScreen";

const Stack = createStackNavigator();

export default class LoginHomeNavigator extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Stack.Navigator initialRouteName="OrdersView">
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SuccessfulValidation"
          component={SuccessfulValidation}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    );
  }
}
