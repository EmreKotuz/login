import React, { Component } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Login from './src/pages/login';

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Login />
        <View style={{ backgroundColor: "#34495E", paddingVertical: 10, width: "100%", }}></View>
      </View>

    );
  }
}


export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});