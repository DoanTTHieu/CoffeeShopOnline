import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const SuccessfulRegisterScreen = (props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.text_header}>Welcome!</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <FontAwesome name="check-circle" color="#ffcc33" size={150} />
        <Text style={styles.text_footer}>Register successfully</Text>
        <Text style={[styles.text_footer, { marginTop: 10 }]}>
          GO BACK TO SIGN IN
        </Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {
            props.navigation.navigate("SignInScreen");
          }}
        >
          <Text style={styles.button_text}>BACK</Text>
        </TouchableOpacity>
      </Animatable.View>
    </View>
  );
};

export default SuccessfulRegisterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffcc33",
  },
  header: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 20,
    paddingBottom: 50,
  },
  footer: {
    flex: 3,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 20,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  text_header: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 30,
  },
  text_footer: {
    color: "#05375a",
    fontSize: 18,
  },
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    backgroundColor: "#ffcc33",
    borderRadius: 30,
    width: 100,
    height: 40,
  },
  button_text: {
    fontSize: 20,
    color: "#fff",
  },
});
