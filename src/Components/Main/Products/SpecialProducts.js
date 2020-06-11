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
    return (
      <View>
        <Swiper />
      </View>
    );
  }
}
