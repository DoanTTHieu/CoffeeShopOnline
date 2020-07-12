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
        <Text style={styles.propTitle}>Order time:</Text>
        <Text style={styles.propDate}>{props.orderDate}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>User Id:</Text>
        <Text style={styles.propValue}>{props.userId}</Text>
      </View>

      <View style={styles.orderLine}>
        <Text style={styles.propTitle}>Total:</Text>
        <Text style={styles.propPrice}>{props.userId}</Text>
      </View>

    </View>
  );
};

export default Order;

const styles = StyleSheet.create({
  order: {
    borderColor: "#F6F6F6",
    borderWidth: 2,
    backgroundColor: "#FFF",
    margin: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.3,
    padding: 10,
    borderRadius: 4,
    //justifyContent: "space-around",
  },

  orderLine: {
    marginTop: 5,
    flexDirection: "row",
    justifyContent: "space-between",
  },

  propTitle: { 
    color: "#9A9A9A", 
    fontWeight: "bold" 
  },

  propValue: {
    color: "#203546",
  },
  propDate: {
    color: '#C21C70'
  },
  propPrice: {
    color: '#C21C70',
    fontWeight: "bold" 
  }
});
