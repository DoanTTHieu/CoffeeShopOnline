import React from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity } from "react-native";
export default function Item(props) {
  const { category, onPress } = props;
  const { imageStyle, price, name } = styles;
  return (
    <TouchableOpacity onPress={onPress} style={{flex: 1}}>
      <View style={styles.item}>
        <View>
          <Image
            style={imageStyle}
            source={{ uri: category.imageUrl }}
            keyExtractor={category.id}
 
          />
        </View>
        <View style={styles.content}>
          <Text style={name}>{category.title}</Text>
          <Text style={price}>${category.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    flexGrow: 1,
    backgroundColor: "#f7c744",
    padding: 5,
    marginLeft: 5,
    marginVertical: 5,
    marginHorizontal: 5,
    flexDirection: "row",
    shadowColor: "#2E272B",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    borderRadius: 5,
  },
  name: {
    fontSize: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",

  },
  imageStyle: {
    width: 150,
    height: 150,
    borderRadius: 5,
  },
  price: {
    color: "#0733ba",
  },
});
