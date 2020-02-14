
import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight, StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

var L1_2 = require('./routes/Labs1_2')
var L3 = require('./routes/Lab3')



function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <TouchableHighlight onPress={()=>navigation.navigate('Labs 1-2')}>
        <Text>Press to go</Text>
      </TouchableHighlight>
    </View>
  );
}


//const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

function App() {


  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Tab.Screen name="Labs 1-2" component={L1_2.render} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;