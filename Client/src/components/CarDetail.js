import React, { useState, useCallback } from "react";
import { useDispatch } from "react-redux";
import {
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  TextInput,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

import { ipv4, port } from "../constant/constant";
import { changeUser } from "../store/actions/users";

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

  const [trigger, setTrigger] = useState(false);

  const currentUser = useSelector((state) => state.users);

  const dispatch = useDispatch();

  const updateQuantity = useCallback((choice) => {
    const currentCart = { ...currentUser.cart };
    currentCart.detail.forEach((item) => {
      if (item.id !== props.item.id) return;
      if (choice === "inc") {
        item.quantity += 1;
      } else if (choice === "desc") {
        item.quantity -= 1;
      } else if (!isNaN(choice) && choice > 0) {
        item.quantity = choice;
      } else if (choice === "rm") {
        item.quantity = 0;
      }
    });

    for (let i = 0; i < currentCart.detail.length; i++) {
      if (currentCart.detail[i].quantity <= 0) {
        currentCart.detail.splice(i, 1);
      }
    }
    dispatch(changeUser(currentUser.username, currentCart));
  });

  const updateQuantityHandler = (choice) => {
    const url = `http://${ipv4}:${port}/cart/${currentUser.cart.id}/updateQuantity/?productId=${props.item.id}&choice=${choice}`;
    fetch(url)
      .then(() => {
        updateQuantity(choice);
      })
      .then((detail) => {
        setTrigger(!trigger);
      })
      .catch((err) => console.log(err));
  };

  return (
    <View style={product} key={Math.random()}>
      <Image source={props.item.imageUrl} style={productImage} />
      <View style={mainRight}>
        <View
          style={{
            justifyContent: "space-between",
            flexDirection: "row",
          }}
        >
          <Text style={txtName}>{props.item.title}</Text>
          <TouchableOpacity onPress={() => updateQuantityHandler("rm")}>
            <Text style={{ color: "#969696" }}>X</Text>
          </TouchableOpacity>
        </View>
        <View>
          <Text style={txtPrice}>{props.item.price} Dong</Text>
        </View>
        <View style={productController}>
          <View style={numberOfProduct}>
            <TouchableOpacity onPress={() => {
                updateQuantityHandler("desc");
              }}>
              <Ionicons name="ios-remove-circle" size={25} color={"#f7c744"} />
            </TouchableOpacity>
            <Text style={{ paddingHorizontal: 8, fontWeight: 'bold', fontSize: 18 }}>{props.item.quantity}</Text>
            <TouchableOpacity  onPress={() => {
                  updateQuantityHandler("inc");
                }}>
              <Ionicons name="ios-add-circle" size={25} color={"#f7c744"} />
            </TouchableOpacity>
            <TouchableOpacity
              style={showDetailContainer}
              onPress={props.onSelect}
            >
              <Text style={txtShowDetail}>SHOW DETAILS</Text>
            </TouchableOpacity>
          </View>
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
    marginLeft: 20
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
    marginTop: 10
  },

});
