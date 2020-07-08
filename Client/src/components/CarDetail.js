import React from "react";

import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
} from "react-native";

const toTitleCase = (str) => {
  return str.replace(
    /\w\S*/g,
    (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()
  );
};

const CartDetail = (props) => {
  const {
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
    <View style={product} key={Math.random()}>
      <Image source={props.item.imageUrl} style={productImage} />
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
          <Text style={txtPrice}>{props.item.price} DONG</Text>
        </View>
        <View style={productController}>
          <View style={numberOfProduct}>
            <TouchableOpacity>
              <Text>+</Text>
            </TouchableOpacity>
            <Text>{props.item.quantity}</Text>
            <TouchableOpacity>
              <Text>-</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity
            style={showDetailContainer}
            onPress={props.onSelect}
          >
            <Text style={txtShowDetail}>SHOW DETAILS</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default CartDetail;

const { width } = Dimensions.get("window");
const imageWidth = width / 4;
const imageHeight = (imageWidth * 452) / 361;

const styles = StyleSheet.create({
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
