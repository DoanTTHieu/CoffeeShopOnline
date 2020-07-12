import React, { useEffect, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  View,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
  TextInput,
} from "react-native";

import backSpecial from "../../../../assets/icons/down.png";
import Items from "../Products/Items";
import { searchKeys } from "../../../store/actions/keys";

export default (props) => {
  const { header, backIconStyle, searchBox } = styles;

  const dispatch = useDispatch();

  const getSearchKeys = useCallback(
    (keys) => {
      dispatch(searchKeys(keys));
    },
    [dispatch]
  );

  return (
    <View>
      <View style={header}>
        <View>
          <TouchableOpacity onPress={props.navigation.goBack}>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
        </View>
        <View>
          <TextInput
            style={searchBox}
            placeholder="SEARCH"
            onChangeText={(val) => getSearchKeys(val)}
          />
        </View>
      </View>

      <View style={{ marginTop: 10 }}>
        <Items
          navigation={props.navigation}
          onSelect={() => {
            props.navigation.navigate("ProductDetail");
          }}
          filter={true}
        />
      </View>
    </View>
  );
};
const { width, height } = Dimensions.get("window");
const styles = StyleSheet.create({
  header: {
    flex: 1,
    backgroundColor: "#f7c744",
    height: height / 16,
    justifyContent: "space-around",
    flexDirection: "row",
    paddingTop: "2%",
    paddingBottom: "1%",
  },
  headerTitle: {
    color: "#203546",
    fontSize: 20,
  },
  backIconStyle: {
    width: 30,
    height: 30,
  },
  searchBox: {
    height: height / 25,
    width: width * 0.8,
    backgroundColor: "#FFF",
    paddingLeft: 5,
  },
});
