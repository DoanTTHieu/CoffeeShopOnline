import React, { Component } from "react";
import { FlatList } from "react-native";
import Item from "./Item";

export default class Items extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }

  componentDidMount() {
    const url = "http://localhost:3001/product"; //đổi localhost thành địa chỉ IPV4 của máy mình
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        this.setState({ data: resData });
      })
      .catch((err) => console.log(err));
  }

  render() {
    // const { navigation } = this.props;
    // const data = [
    //   { id: 1, name: "Product1 ", price: 20 },
    //   { id: 2, name: "Product2 ", price: 30 },
    //   { id: 3, name: "Product3 ", price: 40 },
    // ];
    return (
      <FlatList
        data={this.state.data}
        renderItem={({ item }) => (
          <Item
            title={item.title}
            stock={item.stock}
            imageUrl={item.imageUrl}
            // onPress={() => navigation.navigate('ProductDetail', {
            //     product: item
            // })}
          />
        )}
        style={{ width: "95%" }}
      />
    );
  }
}
