import React from 'react';
import { View, StyleSheet } from 'react-native';
import SpecialProducts from './SpecialProducts';
import Items from './Items';

export default class ProductsView extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <SpecialProducts navigation={this.props.navigation} />
                <Items navigation={this.props.navigation} />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1, paddingTop: 0, backgroundColor: '#dbdbd8'
    },
});

