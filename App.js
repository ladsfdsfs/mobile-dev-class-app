import React, { Component } from 'react';
import { Text, View } from 'react-native';

class Greeting extends Component {
  render() {
    return (<View style={{alignItems: 'center'}}>
    <Text>Hello {this.props.name}!</Text>
  </View>);
  }
}


export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Hello, world!</Text>
        <Text>Connected to Live Editor!</Text>
        <Greeting name="Billy Bob"/>
      </View>
      
    );
  }
}
