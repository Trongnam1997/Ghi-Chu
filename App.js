//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Routes from './components/Routes';

// create a component
class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Routes/>
        <Text>Code nesta </Text>
      </View>
    );
  }
}


//make this component available to the app
export default App;
