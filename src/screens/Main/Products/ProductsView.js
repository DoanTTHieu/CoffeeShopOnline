import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";
import SpecialProducts from "./SpecialProducts";
import Items from "./Items";

const { width, height } = Dimensions.get("window");
const imageBorder = 10;
export default class ProductsView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.specialProducts}>
          <SpecialProducts navigation={this.props.navigation} />
        </View>
        <Items navigation={this.props.navigation} style={styles.item} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    alignItems: "center",
  },
  specialProducts: {
    alignItems: "center",
    margin: 20,
    borderWidth: imageBorder,
    borderColor: "#f7c744",
    width: width * 0.85 + imageBorder * 2,
    height: height * 0.3 + imageBorder * 2,
  },
  item: {
    width: width * 0.85 + imageBorder * 2,
  },
});
