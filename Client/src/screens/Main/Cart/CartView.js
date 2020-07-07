import React, { useState } from "react";
import { useSelector } from "react-redux";
import {
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";
import sp1 from "../../../../assets/items/capuchino.jpg";
import Header from "../../../components/Header";

function toTitleCase(str) {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
}

const CartView = (props) => {
  const gotoDetail = () => {
    const { navigator } = props;
    navigator.push({ name: "PRODUCT_DETAIL" });
  };

  const {
    main,
    checkoutButton,
    checkoutTitle,
    wrapper,
    product,
    mainRight,
    productController,
    txtName,
    txtPrice,
    productImage,
    numberOfProduct,
    txtShowDetail,
    showDetailContainer,
  } = styles;

  return (
    <View style={wrapper}>
      <Header navigation={props.navigation} />
      <ScrollView style={main}>
        {useSelector((state) => state.users.cart).map((item) => (
          <View style={product}>
            <Image source={item.imageUrl} style={productImage} />
            <View style={[mainRight]}>
              <View
                style={{
                  justifyContent: "space-between",
                  flexDirection: "row",
                }}
              >
                <Text style={txtName}>{toTitleCase("Name of product")}</Text>
                <TouchableOpacity>
                  <Text style={{ color: "#969696" }}>X</Text>
                </TouchableOpacity>
              </View>
              <View>
                <Text style={txtPrice}>{item.price} DONG</Text>
              </View>
              <View style={productController}>
                <View style={numberOfProduct}>
                  <TouchableOpacity>
                    <Text>+</Text>
                  </TouchableOpacity>
                  <Text>{item.quantity}</Text>
                  <TouchableOpacity>
                    <Text>-</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity style={showDetailContainer}>
                  <Text style={txtShowDetail}>SHOW DETAILS</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
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
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "#DFDFDF",
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
  main: {
    width,
    backgroundColor: "#DFDFDF",
  },
  checkoutTitle: {
    color: "#203546",
    fontSize: 15,
    fontWeight: "bold",
  },
  product: {
    flexDirection: "row",
    margin: 10,
    padding: 10,
    backgroundColor: "#FFFFFF",
    borderRadius: 2,
    shadowColor: "#3B5458",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
  },
  productImage: {
    width: imageWidth,
    height: imageHeight,
    flex: 1,
    resizeMode: "center",
  },
  mainRight: {
    flex: 3,
    justifyContent: "space-between",
  },
  productController: {
    flexDirection: "row",
  },
  numberOfProduct: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
  },
  txtName: {
    paddingLeft: 20,
    color: "#203546",
    fontSize: 20,
    fontWeight: "400",
  },
  txtPrice: {
    paddingLeft: 20,
    color: "#C21C70",
    fontSize: 20,
    fontWeight: "400",
  },
  txtShowDetail: {
    color: "#C21C70",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "right",
  },
  showDetailContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-end",
  },
});
