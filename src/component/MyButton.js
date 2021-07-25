import React, { Component } from 'react';
import { StyleSheet, TouchableOpacity, Text } from 'react-native';
import PropTypes from 'prop-types';
export default class MyButton extends Component {


    render() {
        return (
            <TouchableOpacity style={[styles.button, { backgroundColor: this.props.bgColor }]}>
                <Text style={[styles.textt, { color: this.props.textColor }]}>{this.props.text}</Text>
            </TouchableOpacity >
        );
    }
}
MyButton.PropTypes = {
    text: PropTypes.string.isRequired,
    bgColor: PropTypes.string,
    textColor: PropTypes.string

};
const styles = StyleSheet.create({
    button: {
        paddingVertical: 15,
        paddingHorizontal: 10,
        borderRadius: 5,
        alignItems: "center",
        color: "white",
    },
    textt: {
        color: "white",
        fontSize: 15,
    }

});
