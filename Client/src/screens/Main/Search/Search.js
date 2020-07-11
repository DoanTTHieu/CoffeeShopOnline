import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput
} from "react-native";
import backSpecial from "../../../../assets/icons/down.png";

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const {
      header,
      headerTitle,
      backIconStyle,
      searchBox
    } = styles;

    return (
      <View >
        <View style={header}>
          <TouchableOpacity onPress={this.props.navigation.goBack}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
          <View>
            <TextInput style={searchBox} placeholder="SEARCH" />
          </View>
        </View>
        <View>

        </View>
      </View>
    );
  }
}
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#f7c744",
    height: height / 16,
    justifyContent: "space-around",
    flexDirection: "row",
    paddingTop: "2%",
    paddingBottom: "1%"
  },
  headerTitle: {
    color: "#203546",
    fontSize: 20
  },
  backIconStyle: {
    width: 30,
    height: 30
  },
  searchBox: {
    height: height / 25,
    width: width * 0.9,
    backgroundColor: "#FFF",
    paddingLeft: 5,
  },
});

export default Search;
