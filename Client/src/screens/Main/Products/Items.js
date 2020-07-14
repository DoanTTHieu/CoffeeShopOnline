import React, { useState, useEffect } from "react";
import { FlatList, View, Text } from "react-native";
import { useSelector } from "react-redux";
import Item from "./Item";
import { hostname } from "../../../constant/constant";
import * as Animatable from "react-native-animatable";

const Items = (props) => {
  const [dataSource, setDataSource] = useState([]);

  const searchedKeys = useSelector((state) => state.keys.keys);

  useEffect(() => {
    let route = "";
    if (props.filter && searchedKeys === "") {
      setDataSource([]);
      return;
    }
    if (!props.filter) route = "product";
    else route = `product/search/?v=${searchedKeys}`;

    const url = `http://${hostname}/${route}`;
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        setDataSource(resData);
      })
      .catch((err) => console.log(err));
  }, [searchedKeys]);

  return (
    <Animatable.View style={{ flex: 1 }} animation="fadeInUpBig" duration={500}>
      {props.filter && dataSource.length === 0 && searchedKeys !== "" ? (
        <Text>Cannot find</Text>
      ) : (
        <FlatList
          data={dataSource}
          numColumns={2}
          renderItem={({ item }) => (
            <Item item={item} id={props.id} onSelect={props.onSelect} />
          )}
          keyExtractor={(item, index) => item.id.toString()}
        />
      )}
    </Animatable.View>
  );
};

export default Items;
