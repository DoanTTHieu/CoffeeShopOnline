import React, { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  View,
  Text,
  StyleSheet,
  Image,
  Dimensions,
  TouchableOpacity,
} from "react-native";

import { ipv4, port } from "../../../constant/constant";
import { changeUser } from "../../../store/actions/users";

const backIcon = require("../../../../assets/icons/blackback.png");
const picture = require("../../../../assets/items/capuchino.jpg");

const ProductDetail = (props) => {
  const selectedItem = useSelector((state) => state.items.selectedItem);
  const currentCart = useSelector((state) => state.users.cart);
  const currentUser = useSelector((state) => state.users.username);

  const dispatch = useDispatch();

  const addToCart = useCallback(
    (cart) => {
      dispatch(
        changeUser(currentUser, {
          id: currentCart.id,
          detail: [...cart.detail],
        })
      );
    },
    [dispatch, currentCart]
  );

  const addToCartHandler = () => {
    const url = `http://${ipv4}:${port}/product/${selectedItem.id}/addToCart`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: selectedItem.id,
        cartId: currentCart.id,
      }),
    })
      .then(() => {
        const url = `http://${ipv4}:${port}/cart/${currentCart.id}/detail`;
        fetch(`http://${ipv4}:${port}/cart/${currentCart.id}/detail`)
          .then((data) => {
            return data.json();
          })
          .then((cart) => {
            addToCart(cart);
          })
          .then(() => {
            props.navigation.goBack();
          });
      })

      .catch((err) => console.log(err));
  };

  const {
    cardStyle,
    header,
    footer,
    backStyle,
    imageContainer,
    textBlack,
    textSmoke,
    textHighlight,
    textMain,
    titleContainer,
    descContainer,
    productImageStyle,
    descStyle,
    button,
    buttonText,
    image
  } = styles;

  return (
    <View style={cardStyle}>
      <View style={header}>
        <TouchableOpacity onPress={props.navigation.goBack}>
          <Image style={backStyle} source={backIcon} />
        </TouchableOpacity>
      </View>
      <View style={imageContainer}>
        <Image source={picture} style={image}/>
      </View>
      <View style={footer}>
        <View style={titleContainer}>
          <Text style={textMain}>
            <Text style={textBlack}>name of product</Text>
            <Text style={textHighlight}> / </Text>
            <Text style={textSmoke}>100$</Text>
          </Text>
        </View>
        <View style={descContainer}>
          <Text style={descStyle}>description of product</Text>
        </View>
        <TouchableOpacity style={button} onPress={addToCartHandler}>
          <Text style={buttonText}>ADD TO CART</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ProductDetail;

const { width, height } = Dimensions.get("window");
const swiperWidth = width / 1.5 - 30;
const swiperHeight = (swiperWidth * 452) / 361;

const styles = StyleSheet.create({
  cardStyle: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    //marginHorizontal: 10,
    //marginVertical: 10,
  },
  header: {
    flexDirection: "row",
    backgroundColor: "#f7c744",
    justifyContent: "space-between",
    height: 50,
    //flex: 1,
    paddingHorizontal: 10,
    paddingTop: 10,
  },
  footer: {
    flex: 6,
    backgroundColor: "white",
    justifyContent: "center",
    alignItems: "flex-end",
  },
  cartStyle: {
    width: 40,
    height: 40,
  },
  backStyle: {
    width: 30,
    height: 30,
  },
  productStyle: {
    width: width / 2,
    height: width / 2,
  },
  imageContainer: {
    margin: 10, 
    marginRight: 10, 
    marginBottom: 10
  },
  textMain: {
    paddingLeft: 20,
    marginVertical: 10,
  },
  textBlack: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#3F3F46",
  },
  textSmoke: {
    fontSize: 20,
    color: "#9A9A9A",
  },
  textHighlight: {
    fontSize: 20,
    color: "#7D59C8",
  },
  titleContainer: {
    borderBottomWidth: 1,
    borderColor: "#F6F6F6",
    marginHorizontal: 20,
    paddingBottom: 5,
  },
  descContainer: {
    margin: 10,
    paddingTop: 10,
    paddingHorizontal: 10,
  },
  descStyle: {
    color: "#AFAFAF",
  },
  linkStyle: {
    color: "#7D59C8",
  },
  productImageStyle: {
    width: swiperWidth,
    height: swiperHeight,
    marginHorizontal: 5,
  },
  mainRight: {
    justifyContent: "space-between",
    alignSelf: "stretch",
    paddingLeft: 20,
  },
  button: {
    backgroundColor: "#f7c744",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    width: (width / 8) * 3,
    height: height / 20,
    margin: width / 10,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  image: {
    height: width, 
    width: width-20
  }
});
