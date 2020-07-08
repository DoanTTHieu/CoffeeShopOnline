import React from "react";
import { Dimensions, StyleSheet, View } from "react-native";
import Header from "../../../components/Header";
import Items from "./Items";
import SpecialProducts from "./SpecialProducts";

const { width, height } = Dimensions.get("window");
const imageBorder = 5;
export default class ProductsView extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Header navigation={this.props.navigation} />
        </View>
        <View style={styles.specialProducts}>
          <SpecialProducts navigation={this.props.navigation} />
        </View>
        <View style={styles.item}>
          <Items
            navigation={this.props.navigation}
            onSelect={() => {
              this.props.navigation.navigate("ProductDetail");
            }}
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
  },
  header: {},
  specialProducts: {
    alignItems: "center",
    margin: 5,
    borderWidth: imageBorder,
    borderColor: "#f7c744",
    height: height * 0.3 + imageBorder * 2,
  },
  item: {
    flex: 1,
  },
});
