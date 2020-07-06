import React, { useState, useEffect } from "react";
import { FlatList, View } from "react-native";
import Item from "./Item";
import { ipv4, port } from "../../../constant/constant";

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
    <View style={{ flex: 1 }}>
      <FlatList
        data={dataSource}
        renderItem={({ item }) => <Item category={item} />}
      />
    </View>
  );
};

export default Items;
