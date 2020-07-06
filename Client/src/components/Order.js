import React from "react";
import { View, Text, StyleSheet } from "react-native";

const Order = (props) => {
  return (
    <View style={styles.order}>
      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Order id:</Text>
        <Text style={styles.propValue}>{props.id}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Order data:</Text>
        <Text style={styles.propValue}>{props.orderDate}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Discount:</Text>
        <Text style={styles.propValue}>{props.discount}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Status:</Text>
        <Text style={styles.propValue}>{props.status}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>User Id:</Text>
        <Text style={styles.propValue}>{props.userId}</Text>
      </View>
    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    borderColor: "black",
    borderWidth: 2,
    backgroundColor: "#FFF",
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around",
  },

  orderLine: {
    marginTop: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  propTitle: { color: "#9A9A9A", fontWeight: "bold" },

  propValue: {
    color: "#203546",
  },
});
