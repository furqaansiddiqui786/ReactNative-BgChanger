import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      randomcolor: null
    };
  }
  
randomcolor=() => {
  return(
    "rgb(" +
    Math.floor((Math.random() * 256)) +
    "," +
    Math.floor((Math.random() * 256)) +
    "," +
    Math.floor((Math.random() * 256)) +
    ")"
  )
}

myButtonPressed = () => {
  this.setState({ randomcolor: this.randomcolor()})
}

  render() {
    return (
      <View style={[styles.container, {backgroundColor: this.state.randomcolor}]}
        >
        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text style={styles.text}>Change Color</Text>
        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 30,
    backgroundColor: "black",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 2,
    color: "white",
  },
});
