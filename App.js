
import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight, StyleSheet } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import render1 from './routes/View1L4'
import render2 from './routes/View2L4';
import render3 from './routes/View3L4';
import render4 from './routes/View4L4';
import render5 from './routes/View5L4';
import render6 from './routes/View6L4';
import render7 from './routes/View7L4';




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


const Stack = createStackNavigator();
//const Tab = createBottomTabNavigator();
/*
<Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />
        <Tab.Screen name="Labs 1-2" component={renderL1_2} />
        <Tab.Screen name="Lab 3" component={renderL3} />
*/
function App() {


  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="v1" component={render1}/>
        <Stack.Screen name="v2" component={render2}/>
        <Stack.Screen name="v3" component={render3}/>
        <Stack.Screen name="v4" component={render4}/>
        <Stack.Screen name="v5" component={render5}/>
        <Stack.Screen name="v6" component={render6}/>
        <Stack.Screen name="v7" component={render7}/>
      </Stack.Navigator> 
    </NavigationContainer>
  );
}

export default App;