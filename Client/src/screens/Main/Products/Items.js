import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Item from "./Item";
import { ipv4, port } from "../../../constant/constant";
import * as Animatable from "react-native-animatable";

const Items = (props) => {
  const [dataSource, setDataSource] = useState([]);

  useEffect(() => {
    const url = `http://${ipv4}:${port}/product`;
    fetch(url)
      .then((res) => res.json())
      .then((resData) => {
        setDataSource(resData);
      })
      .catch((err) => console.log(err));
  }, []);

  // const a = () => {
  //   const b = [...dataSource];
  //   setDataSource(b);
  // };

  return (
    <Animatable.View style={{ flex: 1 }} animation="fadeInUpBig" duration={500}>
      <FlatList
        data={dataSource}
        numColumns={2}
        renderItem={({ item }) => (
          <Item item={item} id={props.id} onSelect={props.onSelect} />
        )}
        //keyExtractor={(item, index) => item.id.toString()}
      />
    </Animatable.View>
  );
};

export default Items;
