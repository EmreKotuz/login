import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Input from '../component/Input'
import MyButton from '../component/MyButton'

export default class LoginForm extends Component {

    render() {
        return (
            <View>
                <Input autoCapitalize="none" placeholder="username" returnKeyType={"next"}
                    onSubmitEditing={() => this.passwordInput.focus()} />
                <Input secureTextEntry={true} placeholder="Password" eturnKeyType={"go"} inputRef={input => this.passwordInput = input} />
                <MyButton bgColor={"#1ABC9C"} textColor={"white"} text={"Giriş Yap"} />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    singInText: {
        marginVertical: 10,
        fontSize: 14,
        color: "black",
    }
});