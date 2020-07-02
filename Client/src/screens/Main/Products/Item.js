import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
export default function Item(props) {
  const { imageStyle, price, name } = styles;
  return (
    <TouchableOpacity>
      <View style={styles.item}>
        <Image
          source={{ uri: props.imageUrl }}
          style={imageStyle}
          key={props.id}
        />
        <View
          style={{
            width: "100%",
            justifyContent: "center",
            alignItems: "flex-start",
            paddingHorizontal: 40,
          }}
        >
          <Text style={name}>{props.title}</Text>
          <Text style={price}>{props.stock}$</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  item: {
    backgroundColor: "#f7c744",
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: "row",
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  price: {
    marginBottom: 5,
    paddingLeft: 10,
    color: "#0733ba",
  },
});
