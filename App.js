
import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight, StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
//import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import renderL3 from './routes/Lab3'
import renderL1_2 from './routes/Labs1_2'



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
        <Tab.Screen name="Labs 1-2" component={renderL1_2} />
        <Tab.Screen name="Lab 3" component={renderL3} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;