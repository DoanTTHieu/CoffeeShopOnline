import React, { useState, useEffect } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  FlatList,
} from "react-native";
import backSpecial from "../../../assets/icons/blackback.png";
import * as Animatable from "react-native-animatable";

import Order from "../../components/Order";
import { ipv4, port } from "../../constant/constant";

const OrderHistory = (props) => {
  const [dataSource, setDataSource] = useState([]);

  const goBackToMain = () => {
    props.navigation.goBack();
  };

  useEffect(() => {
    const url = `http://${ipv4}:${port}/order`;
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        setDataSource(resData);
      })
      .catch((err) => console.log(err));
  }, []);

  const {
    wrapper,
    header,
    headerTitle,
    backIconStyle,
    body,
    orderRow,
  } = styles;

  return (
    <Animatable.View style={wrapper} animation="fadeInRight">
      <View style={header}>
        <View />
        <TouchableOpacity onPress={goBackToMain}>
          <Image source={backSpecial} style={backIconStyle} />
        </TouchableOpacity>
        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <Text style={headerTitle}>Order History</Text>
        </View>
      </View>
      <View style={body}>
        <FlatList
          data={dataSource}
          renderItem={({ item }) => (
            <Order
              id={item.id}
              orderDate={item.orderDate}
              userId={item.userId}
            ></Order>
          )}
        />
      </View>
    </Animatable.View>
  );
};

const { width } = Dimensions.get("window");

const styles = StyleSheet.create({
  wrapper: { flex: 1, backgroundColor: "#fff" },
  header: {
    flex: 1,
    backgroundColor: "#f7c744",
    alignItems: "center",
    justifyContent: "flex-start",
    flexDirection: "row",
    paddingHorizontal: 10,
  }, // eslint-disable-line
  headerTitle: { color: "#203546", fontSize: 20 },
  //headerTitle: { fontFamily: 'Avenir', color: '#203546', fontSize: 20 },
  backIconStyle: { width: 30, height: 30 },
  body: { flex: 10, backgroundColor: "#F6F6F6" },
});

export default OrderHistory;
