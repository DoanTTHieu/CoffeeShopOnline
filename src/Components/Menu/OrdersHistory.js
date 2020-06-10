import React, { Component } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  ScrollView,
} from "react-native";
import backSpecial from "../../../assets/icons/blackback.png";

export default class OrderHistory extends Component {
  render() {
    const {
      wrapper,
      header,
      headerTitle,
      backIconStyle,
      body,
      orderRow,
    } = styles;
    return (
      <View style={wrapper}>
        <View style={header}>
          <View />
          <TouchableOpacity>
            <Image source={backSpecial} style={backIconStyle} />
          </TouchableOpacity>
          <View
            style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
          >
            <Text style={headerTitle}>Order History</Text>
          </View>
        </View>
        <View style={body}>
          <ScrollView>
            <View style={orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#203546" }}>ORD001</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#203546" }}>Pending</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  100$
                </Text>
              </View>
            </View>
            <View style={orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#203546" }}>ORD001</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#203546" }}>Pending</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  100$
                </Text>
              </View>
            </View>

            <View style={orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#203546" }}>ORD001</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#203546" }}>Pending</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  100$
                </Text>
              </View>
            </View>

            <View style={orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#203546" }}>ORD001</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#203546" }}>Pending</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  100$
                </Text>
              </View>
            </View>

            <View style={orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#203546" }}>ORD001</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#203546" }}>Pending</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  100$
                </Text>
              </View>
            </View>

            <View style={orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#203546" }}>ORD001</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#203546" }}>Pending</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  100$
                </Text>
              </View>
            </View>
            <View style={orderRow}>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Order id:
                </Text>
                <Text style={{ color: "#203546" }}>ORD001</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  OrderTime:
                </Text>
                <Text style={{ color: "#C21C70" }}>2017-04-19 08:30:08</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Status:
                </Text>
                <Text style={{ color: "#203546" }}>Pending</Text>
              </View>
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <Text style={{ color: "#9A9A9A", fontWeight: "bold" }}>
                  Total:
                </Text>
                <Text style={{ color: "#C21C70", fontWeight: "bold" }}>
                  100$
                </Text>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
    );
  }
}

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
  orderRow: {
    height: width / 3,
    backgroundColor: "#FFF",
    margin: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#DFDFDF",
    shadowOpacity: 0.2,
    padding: 10,
    borderRadius: 2,
    justifyContent: "space-around",
  },
});
