import React, { Component } from "react";
import { FlatList, ActivityIndicator, View } from "react-native";

import Item from "./Item";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
    };
  }
    render() {

        const { navigation } = this.props;
        const data = [{id: 1, name: "Product1 ",price: 20},{id: 2, name: "Product2 ",price: 30},{id: 3, name: "Product3 ",price: 40}];
        return (
            <FlatList
            data={data}
            renderItem={({ item }) =>
                <Item 
                category={item}
                // onPress={() => navigation.navigate('ProductDetail', {
                //     product: item
                // })} 
                />}
            />
        );
    }
}
