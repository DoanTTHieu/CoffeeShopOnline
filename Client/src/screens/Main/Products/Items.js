import React, { Component } from "react";
import { FlatList, View, ScrollView } from "react-native";
import Item from "./Item";

const localhost = "192.168.39.237"; //đổi localhost thành địa chỉ IPV4 của máy mình
export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: [],
    };
  }

  componentDidMount() {
    const url = "http://" + localhost + ":3001/product";
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        this.setState({ dataSource: resData });
      })
      .catch((err) => console.log(err));
  }
  render() {

    const { navigation } = this.props;
    return (
      <View style={{flex: 1}}>
        <FlatList
          data={this.state.dataSource}
          renderItem={({ item }) =>
            <Item category={item}
            // onPress={() => navigation.navigate('ProductDetail', {
            //     product: item
            />
          }
        />

      </View>);
  }
}
