import React from 'react';
import { } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductsView from './ProductsView';
import ProductDetail from './ProductDetail';

const Stack = createStackNavigator();

export default class ProductsScreen extends React.Component {
  render() {
    return (
      <Stack.Navigator initialRouteName="ProductsView" >
        <Stack.Screen 
          name='ProductDetail' 
          component={ProductDetail} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen
         name='ProductsView' 
         component={ProductsView} 
         options={{ headerShown: false }} 
         navigation={this.props.navigation} 
        />
      </Stack.Navigator>
    );
  }
}

// import React, { Component } from 'react';
// import { View, Image, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native';
// import SwiperFlatList from 'react-native-swiper-flatlist';

// export default class SpecialItems extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//         types: [],
//     };
// }

//   render() {
//     const { wrapper, imageStyle } = styles;
//     return (
//       <View>
//           <Text>HOME</Text>
//       </View >
//     );
//   }
// }
// //onPress={this.goToProductDetail.bind(this)}
// //navigation.navigate('ProductDetail')
// //this.goToProductDetail.bind(this)
// const { width, height } = Dimensions.get('window');

// const styles = StyleSheet.create({
//   wrapper: {
//     height: height * 0.3,
//     backgroundColor: '#FFF',
//     margin: 10,
//     shadowColor: '#2E272B',
//     shadowOffset: { width: 0, height: 3 },
//     shadowOpacity: 0.8,
//     padding: 10,
//   },
//   imageStyle: {
//     width: width - 40,
//     height: height * 0.3,
//     resizeMode: 'cover'
//   },
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//     paddingTop: 30
//   },
//   child: {
//     height: height * 0.3,
//     width,
//     justifyContent: 'center'
//   },
// });
