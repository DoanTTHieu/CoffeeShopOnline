import React, { Component } from "react";
import {
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  Text,
} from "react-native";

import image from "../../../../assets/items/capuchino.jpg";
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

