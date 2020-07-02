import React, { Component } from "react";
import menu from "../../assets/icons/menu.png";
import {
    View,
    Image,
    TextInput,
    TouchableOpacity,
    StyleSheet,
    Dimensions,
  } from "react-native";
const { height, width } = Dimensions.get("window");

export default class AuthInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
      }
    render() {
        return (
            <View style={styles.header}>
                <View style={styles.container}>
                    <TouchableOpacity
                        onPress={() => {
                            this.props.navigation.openDrawer();
                        }}
                    >
                        <Image source={menu} style={{ width: 30, height: 30 }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <TextInput style={styles.searchBox} placeholder="SEARCH" />
                </View>
            </View>

        );
    }
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: "#f7c744",
        height: height / 17,
        justifyContent: "space-around",
        flexDirection: "row",
        paddingTop: "2%",
      },
      container: {
        //padding: 10,
    
      },
      searchBox: {
        height: height / 25,
        width: width * 0.8,
        backgroundColor: "#FFF",
        paddingLeft: 5,
      },
});

