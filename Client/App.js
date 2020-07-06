import React from "react";
import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";

import LoginNavigator from "./src/navigation/LoginHomeNavigator";
import usersReducer from "./src/store/reducers/users";

StatusBar.setHidden(true);

const rootReducer = combineReducers({
  users: usersReducer,
});

const store = createStore(rootReducer);

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <LoginNavigator />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
