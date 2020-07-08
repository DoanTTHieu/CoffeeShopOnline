import React from "react";
import { useSelector } from "react-redux";
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

import Header from "../../../components/Header";
import CartDetail from "../../../components/CarDetail";

const CartView = (props) => {
  const { main, checkoutButton, checkoutTitle, wrapper } = styles;

  return (
    <View style={wrapper}>
      <Header navigation={props.navigation} />
      <ScrollView style={main}>
        {useSelector((state) => state.users.cart.detail).map((item) => (
          <CartDetail
            item={item}
            onSelect={() => {
              props.navigation.navigate("ProductDetail");
            }}
            key={Math.random()}
          />
        ))}
      </ScrollView>
      <TouchableOpacity style={checkoutButton}>
        <Text style={checkoutTitle}>TOTAL {1000}$ CHECKOUT NOW</Text>
      </TouchableOpacity>
    </View>
  );
};

export default CartView;

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#DFDFDF",
  },
  main: {
    width,
    backgroundColor: "#DFDFDF",
  },
  checkoutTitle: {
    color: "#203546",
    fontSize: 15,
    fontWeight: "bold",
  },
  checkoutButton: {
    height: 50,
    margin: 10,
    marginTop: 0,
    backgroundColor: "#f7c744",
    borderRadius: 2,
    alignItems: "center",
    justifyContent: "center",
  },
});
