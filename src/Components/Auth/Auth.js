import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet, Keyboard, 
    TextInput, KeyboardAvoidingView, TouchableWithoutFeedback
} from 'react-native';
import back from '../../../assets/icons/back.png';
import cup from '../../../assets/icons/cup.png';

export default class Auth extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            email: '',
            rePassword: '',
            isSignIn: false
        };
    }
    SignIn() {
        this.setState({ isSignIn: true });
    }
    SignUp() {
        this.setState({ isSignIn: false });
    }

    render() {
        const { row1, iconStyle, titleStyle, container, btnSignIn,
            btnSignUp, inactiveStyle, activeStyle, controlStyle, keyboardContainer,
            infoContainer, input, buttonContainer, buttonText } = styles;
        const SignInJSX = (
            <View style={infoContainer}>
                <TextInput
                    style={input}
                    placeholder='Username'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    autoCorrect={false}
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    style={input}
                    placeholder='Password'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='go'
                    secureTextEntry
                    autoCorrect={false}
                    ref={'txtPassword'}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />
                <TouchableOpacity
                    style={buttonContainer}
                >
                    <Text style={buttonText}>SIGN IN NOW </Text>
                </TouchableOpacity>
            </View>
        );

        const SignUpJSX = (
            <View style={infoContainer}>
                <TextInput
                    style={input}
                    placeholder='Enter your username'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    autoCorrect={false}
                    onSubmitEditing={() => this.refs.txtEmail.focus()}
                    onChangeText={(username) => this.setState({ username })}
                    value={this.state.username}
                />
                <TextInput
                    style={input}
                    placeholder='Enter your Email'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    autoCorrect={false}
                    ref={'txtEmail'}
                    onSubmitEditing={() => this.refs.txtPassword.focus()}
                    onChangeText={(email) => this.setState({ email })}
                    value={this.state.email}
                />
                <TextInput
                    style={input}
                    placeholder='Enter your password'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='next'
                    secureTextEntry
                    autoCorrect={false}
                    ref={'txtPassword'}
                    onSubmitEditing={() => this.refs.txtRePassword.focus()}
                    onChangeText={(password) => this.setState({ password })}
                    value={this.state.password}
                />

                <TextInput
                    style={input}
                    placeholder='Re-enter your password'
                    placeholderTextColor='rgba(255,255,255,0.8)'
                    returnKeyType='go'
                    secureTextEntry
                    autoCorrect={false}
                    ref={'txtRePassword'}
                    onChangeText={(rePassword) => this.setState({ rePassword })}
                    value={this.state.rePassword}
                />
                <TouchableOpacity
                    style={buttonContainer}
                >
                    <Text style={buttonText}>SIGN UP NOW </Text>
                </TouchableOpacity>
            </View>
        );
        const { isSignIn } = this.state;
        const mainJSX = isSignIn ? SignInJSX : SignUpJSX;

        return (
                <View style={container}>
                    <View style={row1}>
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
                            <KeyboardAvoidingView >
                                <View style={keyboardContainer}>
                                    {mainJSX}
                                </View>
                            </KeyboardAvoidingView>
                        </TouchableWithoutFeedback>
                    </View>

                    <View style={controlStyle}>
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
        backgroundColor: '#203546',
        padding: 20,
        justifyContent: 'space-between'
    },
    row1: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    titleStyle: {
        color: '#f7c744',
        //fontFamily: 'Avenir',
        fontSize: 30
    },
    iconStyle: {
        width: 30,
        height: 30
    },
    controlStyle: {
        flexDirection: 'row',
        alignSelf: 'stretch',
    },
    activeStyle: {
        color: '#203546',
    },
    inactiveStyle: {
        color: '#D7D7D7'
    },
    btnSignIn: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        borderBottomLeftRadius: 20,
        borderTopLeftRadius: 20,
        marginBottom: 1,
        justifyContent: 'center',
    },
    btnSignUp: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingVertical: 15,
        flex: 1,
        marginLeft: 1,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        marginBottom: 1

    },
    keyboardContainer: {
        backgroundColor: 'rgb(32,53,70)',
        //backgroundColor: 'rgb(247, 138, 224)',
        flex: 1,
        flexDirection: 'column',
    },
    infoContainer: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        height: 220,
        padding: 20,
    },
    input: {
        height: 40,
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: '#FFF',
        paddingHorizontal: 10,
        marginBottom: 10
    },
    buttonContainer: {
        backgroundColor: '#f7c744',
        paddingVertical: 15
    },
    buttonText: {
        textAlign: 'center',
        color: 'rgb(32,53,70)',
        fontWeight: 'bold',
        fontSize: 18
    }
});