import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";
import Swiper from "../../Custom/Swiper";
export default class SpecialItems extends Component {
  constructor(props) {
    super(props);
    this.state = {
      types: [1, 2, 3],
    };
  }

  goToProductDetail() {
    const { navigation } = this.props;
    navigation.navigate("ProductDetail");
  }

  render() {
    const { wrapper } = styles;
    return (
      <View style={wrapper}>
        <Swiper style={styles.swiper} />
      </View>
    );
  }
}

const { width, height } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: {
    height: height * 0.3,
    backgroundColor: "#FFF",
    margin: 10,
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.8,
    padding: 10,
  },
  imageStyle: {
    width: width - 40,
    height: height * 0.3,
    resizeMode: "cover",
  },
  container: {
    flex: 1,
    backgroundColor: "white",
    paddingTop: 30,
  },
  child: {
    height: height * 0.3,
    width,
    justifyContent: "center",
  },
});
