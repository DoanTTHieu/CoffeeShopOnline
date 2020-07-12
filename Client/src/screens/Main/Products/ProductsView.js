import React from "react";
import { View, StyleSheet, Dimensions } from "react-native";

import SpecialProducts from "./SpecialProducts";
import Items from "./Items";
import Header from "../../../components/Header";

const { width, height } = Dimensions.get("window");
const imageBorder = 5;
export default class ProductsView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation} />
        </View>
        {/* <View style={styles.specialProducts}>
          <SpecialProducts navigation={this.props.navigation} />
        </View> */}
        <View style={{ flex: 1, marginTop: 10 }}>
          <Items
            navigation={this.props.navigation}
            onSelect={() => {
              this.props.navigation.navigate("ProductDetail");
            }}
            filter={false}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 0,
    //alignItems: "center",
    backgroundColor: "#DFDFDF",
  },
  header: {},
  specialProducts: {
    alignItems: "center",
    margin: 5,
    borderWidth: imageBorder,
    borderColor: "#f7c744",
    //width: width * 0.85 + imageBorder * 2,
    height: height * 0.3 + imageBorder * 2,
  },
});
