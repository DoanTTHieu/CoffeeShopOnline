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
  TextInput,
} from "react-native";
import back from "../../../assets/icons/back.png";
import cup from "../../../assets/icons/cup.png";

import AuthInput from "../../components/AuthInput";

const localhost = "192.168.218.106";
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

  SignInHandler = () => {
    const url = "http://" + localhost + ":3001/auth/login";
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error("Validation failed!");
        }
        if ((res.status != 200) & (res.status != 201)) {
          throw new Error("Could not authenticate you!");
        }
        return res.json();
      })
      .then((result) => this.props.navigation.navigate("Menu"))
      .catch((err) => console.log("Hieu"));
  };

  SignUpHandler = () => {
    if (this.state.password !== this.state.rePassword) {
      throw new Error("Password and re-password does not match!");
    }
    const url = "http://" + localhost + ":3001/auth/signup";
    fetch(url, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: this.state.email,
        password: this.state.password,
        username: this.state.username,
      }),
    })
      .then((res) => {
        if (res.status === 422) {
          throw new Error(
            "Validation failed! Make sure the email address isn't used yet!"
          );
        }
        if ((res.status != 200) & (res.status != 201)) {
          throw new Error("Creating new user failed!");
        }
        return res.json();
      })
      .catch((err) => console.log(err));
  };

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

    const { isSignIn } = this.state;

    const SignInJSX = (
      <View style={infoContainer}>
        <TextInput
          placeholder="Email"
          style={styles.input}
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          onChangeText={(email) => this.setState({ email: email })}
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="go"
          autoCorrect={false}
          secureTextEntry="true"
          onChangeText={(password) => this.setState({ password: password })}
        />
        <TouchableOpacity
          style={buttonContainer}
          onPress={() => this.SignInHandler(this)}
        >
          <Text style={buttonText}>SIGN IN NOW </Text>
        </TouchableOpacity>
      </View>
    );

    const SignUpJSX = (
      <View style={infoContainer}>
        <TextInput
          placeholder="Enter your email address"
          style={styles.input}
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          onChangeText={(email) => this.setState({ email: email })}
        />
        <TextInput
          placeholder="Enter your username"
          style={styles.input}
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          onChangeText={(username) => this.setState({ username: username })}
        />
        <TextInput
          placeholder="Enter your password"
          style={styles.input}
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          secureTextEntry="true"
          onChangeText={(password) => this.setState({ password: password })}
        />
        <TextInput
          placeholder="Re-enter your password"
          style={styles.input}
          placeholderTextColor="rgba(255,255,255,0.8)"
          returnKeyType="next"
          autoCorrect={false}
          secureTextEntry="true"
          onChangeText={(rePassword) =>
            this.setState({ rePassword: rePassword })
          }
        />
        <TouchableOpacity
          style={buttonContainer}
          onPress={this.SignUpHandler.bind(this)}
        >
          <Text style={buttonText}>SIGN UP NOW </Text>
        </TouchableOpacity>
      </View>
    );

    const mainJSX = isSignIn ? SignInJSX : SignUpJSX;

    return (
      <View style={container}>
        <View style={header}>
          <TouchableOpacity>
            <Image source={back} style={iconStyle} onPress={()=>this.props.navigation.goBack()}/>
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
    //marginTop: 20,
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
