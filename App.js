
import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight, StyleSheet, AsyncStorage } from 'react-native';


import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';




function HomeScreen({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen</Text>

      <TouchableHighlight onPress={() => navigation.navigate('Labs 1-2')}>
        <Text>Press to go</Text>
      </TouchableHighlight>
    </View>
  );
}

class HomeThing extends Component {

  render() {

  }
}


//const Tab = createBottomTabNavigator();

// function App() {


//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Overview' }} />


//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }

// export default App;



class CustomComponent extends Component {
  constructor(props) {
    super(props);
    this.state = { text: 'lol', stores: [] }
    console.log('Constructor Called.');

    this.storeData('constructor', 0)
    this.storeData('willMount', 0)
    this.storeData('didMount', 0)
    this.storeData('receiveProps', 0)
    this.storeData('shouldUpdate', 0)
    this.storeData('willUpdate', 0)
    this.storeData('didUpdate', 0)
    this.storeData('didCatch', 0)
    this.storeData('willUnmount', 0)

    this.count('constructor')
  }


  storeData = async (key, data) => {
    //console.log(data)
    try {
      await AsyncStorage.setItem(key, 'n' + data)

    } catch (error) {
      console.log('fuck, something happened')
      console.error(error)
    }
  }
  _getData = async (key) => {
    try {
      const value = await AsyncStorage.getItem(key)
      if (value != null) {
        let num = value.substring(1)

        return num;
      } else {
        console.log('oh no')
      }
    } catch (e) {

    }
  }
  count(name) {
    this._getData(name).then(val => {
      this.storeData(name, +val + 1);
    })
  }

  componentDidMount() {
    console.log('componentDidMount called.');

    this.count('didMount')

  }

  UNSAFE_componentWillMount() {
    console.log('componentWillMount called.');
    this.count('willMount')
  }

  UNSAFE_componentWillReceiveProps(nextProp) {
    console.log('componentWillReceiveProps called.', nextProp);
    this.count('receiveProps')
  }

  shouldComponentUpdate(nextProp, nextState) {
    console.log('shouldComponentUpdate called.');
    this.count('shouldUpdate')
    return true;
  }

  UNSAFE_componentWillUpdate(nextProp, nextState) {
    console.log('componentWillUpdate called.');
    this.count('willUpdate')

  }

  componentDidUpdate(prevProp, prevState) {
    console.log('componentDidUpdate called.');
    this.count('didUpdate')

  }

  componentWillUnmount() {
    console.log('componentWillUnmount called.');
    this.count('willUnmount')
  }

  componentDidCatch(error, info) {
    console.log('componentDidCatch called.');
    this.count('didCatch')
  }

  getAllDatas = () => {
    AsyncStorage.getAllKeys((err, keys) => {
      AsyncStorage.multiGet(keys, (err, stores) => {
        this.setState({ stores });
      });
    });
  }

  render() {
    // this._getData('constructor')
    // this._getData('willMount')
    // this._getData('didMount')
    // this._getData('receiveProps')
    // this._getData('shouldUpdate')
    // this._getData('willUpdate')
    // this._getData('didUpdate')
    // this._getData('didCatch')
    // this._getData('willUnmount')

    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <TouchableHighlight onPress={() => {
          this.setState({ text: 'yeet' })

          this.getAllDatas()
        }}>
          <Text style={{ backgroundColor: 'green' }}>trigger update</Text>
        </TouchableHighlight>

        {this.state.stores.map(item =>
          <Text style={{ fontSize: 30 }}>{`${item[0]}: ${item[1]}`}</Text>)}

        <TouchableHighlight onPress={() => {
          AsyncStorage.clear()
          console.log('*******RESETTING*******')
          this.storeData('constructor', 0)
          this.storeData('willMount', 0)
          this.storeData('didMount', 0)
          this.storeData('receiveProps', 0)
          this.storeData('shouldUpdate', 0)
          this.storeData('willUpdate', 0)
          this.storeData('didUpdate', 0)
          this.storeData('didCatch', 0)
          this.storeData('willUnmount', 0)
          this.getAllDatas()
        }}>

          <Text style={{ backgroundColor: 'red' }}>reset</Text> 

        </TouchableHighlight>

      </View>
    );
  }
}

export default class App extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: 'center' }}>
        <CustomComponent name="C" />

      </View>
    );
  }
} 