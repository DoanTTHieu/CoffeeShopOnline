import React, { Component } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
  Keyboard,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
} from "react-native";
import back from "../../../assets/icons/back.png";
import cup from "../../../assets/icons/cup.png";

import AuthInput from "../../components/AuthInput";
export default class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      email: "",
      rePassword: "",
      isSignIn: true,
    };
  }
  SignIn() {
    this.setState({ isSignIn: true });
  }
  SignUp() {
    this.setState({ isSignIn: false });
  }

  render() {
    const {
      header,
      iconStyle,
      titleStyle,
      container,
      btnSignIn,
      btnSignUp,
      inactiveStyle,
      activeStyle,
      control,
      keyboardContainer,
      infoContainer,
      buttonContainer,
      buttonText,
    } = styles;
    const SignInJSX = (
      <View style={infoContainer}>
        <AuthInput placeholder="Username" returnKeyType="next" />
        <AuthInput placeholder="Password" returnKeyType="go" isPassword />
        {/* <TextInput
          style={input}
          placeholder="Username"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={input}
          placeholder="Password"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="go"
          secureTextEntry={true}
          autoCorrect={false}
          ref={"txtPassword"}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        /> */}
        <TouchableOpacity
          style={buttonContainer}
          onPress={() => this.props.navigation.navigate("Menu")}
        >
          <Text style={buttonText}>SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );

    const SignUpJSX = (
      <View style={infoContainer}>
        <AuthInput placeholder="Enter your username" returnKeyType="next" />
        <AuthInput placeholder="Enter your email" returnKeyType="next" />
        <AuthInput
          placeholder="Enter your password"
          returnKeyType="next"
          isPassword
        />
        <AuthInput
          placeholder="Re-enter your password"
          returnKeyType="go"
          isPassword
        />
        {/* <TextInput
          style={input}
          placeholder="Enter your username"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          onSubmitEditing={() => this.refs.txtEmail.focus()}
          onChangeText={(username) => this.setState({ username })}
          value={this.state.username}
        />
        <TextInput
          style={input}
          placeholder="Enter your Email"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          ref={"txtEmail"}
          onSubmitEditing={() => this.refs.txtPassword.focus()}
          onChangeText={(email) => this.setState({ email })}
          value={this.state.email}
        />
        <TextInput
          style={input}
          placeholder="Enter your password"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          secureTextEntry
          autoCorrect={false}
          ref={"txtPassword"}
          onSubmitEditing={() => this.refs.txtRePassword.focus()}
          onChangeText={(password) => this.setState({ password })}
          value={this.state.password}
        />

        <TextInput
          style={input}
          placeholder="Re-enter your password"
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="go"
          secureTextEntry
          autoCorrect={false}
          ref={"txtRePassword"}
          onChangeText={(rePassword) => this.setState({ rePassword })}
          value={this.state.rePassword}
        /> */}
        <TouchableOpacity style={buttonContainer}>
          <Text style={buttonText}>SIGN UP NOW </Text>
        </TouchableOpacity>
      </View>
    );
    const { isSignIn } = this.state;
    const mainJSX = isSignIn ? SignInJSX : SignUpJSX;

    return (
      <View style={container}>
        <View style={header}>
          <TouchableOpacity>
            <Image source={back} style={iconStyle} />
          </TouchableOpacity>
          <Text style={titleStyle}>BACK</Text>
          <Image source={cup} style={iconStyle} />
        </View>

        <View>
          <TouchableWithoutFeedback
            style={keyboardContainer}
            onPress={Keyboard.dismiss}
          >
            <KeyboardAvoidingView>
              <View style={keyboardContainer}>{mainJSX}</View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>
        </View>

        <View style={control}>
          <TouchableOpacity style={btnSignIn} onPress={this.SignIn.bind(this)}>
            <Text style={isSignIn ? activeStyle : inactiveStyle}>SIGN IN</Text>
          </TouchableOpacity>
          <TouchableOpacity style={btnSignUp} onPress={this.SignUp.bind(this)}>
            <Text style={!isSignIn ? activeStyle : inactiveStyle}>SIGN UP</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#203546",
    padding: 20,
    justifyContent: "space-between",
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 40,
  },
  titleStyle: {
    color: "#f7c744",
    fontSize: 30,
  },
  iconStyle: {
    width: 30,
    height: 30,
  },
  control: {
    flexDirection: "row",
    alignSelf: "stretch",
    paddingBottom: 40,
  },
  activeStyle: {
    color: "#203546",
  },
  inactiveStyle: {
    color: "#D7D7D7",
  },
  btnSignIn: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
    flex: 1,
    borderBottomLeftRadius: 20,
    borderTopLeftRadius: 20,
    marginBottom: 1,
    justifyContent: "center",
  },
  btnSignUp: {
    backgroundColor: "#fff",
    alignItems: "center",
    paddingVertical: 15,
    flex: 1,
    marginLeft: 1,
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
    marginBottom: 1,
  },
  keyboardContainer: {
    backgroundColor: "rgb(32,53,70)",
    flexDirection: "column",
  },
  infoContainer: {
    left: 0,
    right: 0,
    bottom: 0,
    padding: 20,
  },
  input: {
    height: 40,
    backgroundColor: "rgba(255,255,255,0.2)",
    color: "#FFF",
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  buttonContainer: {
    backgroundColor: "#f7c744",
    paddingVertical: 15,
    marginVertical: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    color: "rgb(32,53,70)",
    fontWeight: "bold",
    fontSize: 18,
  },
});
