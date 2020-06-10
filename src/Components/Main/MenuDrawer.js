
import React, { Component } from 'react';
import { View, StyleSheet, Image, TouchableOpacity, Text } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem,
  DrawerItemList } from '@react-navigation/drawer'; 

import OrdersHistory from '../Menu/OrdersHistory';
//import ChangeInfo from '../Menu/ChangeInfo';
import account from '../../../assets/icons/account.png';
import TabNavigator from './TabNavigator';
import Auth from '../Auth/Auth';
class CustomDrawerContent extends Component {
 
  render() {
    const { container, profile, btnStyle, btnText, logInContainer, txtUsername } = styles;
    const logOutJSX = (
      <View style={{ flex: 1 }}>
        <TouchableOpacity
          style={btnStyle}
          onPress={() => this.props.navigation.navigate('Auth')}
        >
          <Text style={btnText}>Sign in</Text>
        </TouchableOpacity>
      </View>
    );
    const logInJSX = (
      <View style={logInContainer} >
        <Text style={txtUsername}>USERNAME</Text>
        <DrawerContentScrollView {...this.props}>
          <DrawerItemList {...this.props} labelStyle={{ fontSize: 18 }} />
          <DrawerItem label="Sign out" labelStyle={{ fontSize: 18 }} />
        </DrawerContentScrollView>
      </View>
    );

    const mainJSXView = this.props.getLoginState ? logInJSX : logOutJSX;
    return (
      <View style={container}>
        <Image source={account} style={profile} />
        {mainJSXView}
      </View>
    );
  }
}

const Drawer = createDrawerNavigator();

// eslint-disable-next-line react/no-multi-comp
export default class MenuDrawer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
    const loggedIn = (
      //<Drawer.Screen name="Change Information" component={ChangeInfo} />
      <Drawer.Screen name="Orders History" component={OrdersHistory} />
    );

    const logedOut = (
      <Drawer.Screen name="Auth" component={Auth} />
    );
    const mainJSX = this.state.isLoggedIn ? loggedIn : loggedOut;

    return (
      <View style={{ flex: 1 }} >
        <Drawer.Navigator
          drawerContent={(props) => 
            <CustomDrawerContent {...props} getLoginState={this.state.isLoggedIn} />}
            initialRouteName="Home"
            drawerStyle={{
            backgroundColor: '#f7c744',
            width: 240,
          }}
        >
          <Drawer.Screen name="Home" component={TabNavigator} />
          {mainJSX}
        </Drawer.Navigator>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  customStyle: {
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#f7c744',
    alignItems: 'center',
    paddingTop: 100
  },
  profile: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 5
  },
  btnStyle: {
    height: 50,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
    paddingHorizontal: 70
  },
  btnText: {
    color: '#203546',
    fontSize: 20
  },
  logInContainer: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  txtUsername: {
    color: '#203546',
    //fontFamily: 'Avenir'
  }
});




