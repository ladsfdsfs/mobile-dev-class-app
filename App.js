import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'


class Question extends Component {
  constructor(props){
    super(props);
    this.state = {num:0}

  }
  onselect = (opt)=>{
    console.log(opt)
  }
  
  render() {
    

    

    function createTouch(text, type, that){
      return (<TouchableHighlight  onPress={()=>that.onselect(type)} >
        <Text style={{color:'green'}}>{text}</Text>
      </TouchableHighlight>)
    }

    let a = <Text>a thing</Text>

    let b=a;
    for(let x = 0; x<15; x++){
      b+=a;
    }
    if(this.state.num==0)
    return (<View style={{}}>
      <Text>{this.props.q}</Text>
      {createTouch(this.props.a.a, 1, this)}
      {createTouch(this.props.a.b, 2, this)}
      
    </View>);
    else if(this.state.num==1)
    return (<View style={{}}>
      <Text style={{backgroundColor:'green'}}>{this.props.q}</Text>
      {createTouch(this.props.a.a, 1, this)}
      {createTouch(this.props.a.b, 2, this)}
      
    </View>);
    else 
    return (<View style={{}}>
      <Text style={{backgroundColor:'red'}}>{this.props.q}</Text>
      {createTouch(this.props.a.a, 1, this)}
      {createTouch(this.props.a.b, 2, this)}
      
    </View>);
      
  }
}
// <Question q="What is a bear?" a={{a:'a type of cheese', b:'a Toyota model released in 1943', c:'smoky', d:'a smoothie'}}/>



export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center"  }}>
        <Text>buffer</Text>
        <Text>buffer</Text>
        
        <Text>Hello, world!</Text>
        <Text>Connected to aLive Editor!</Text>
        <Question q="What is a bear?" a={{a:'a type of cheese', b:'a Toyota model released in 1943', c:'smoky', d:'a smoothie'}}/>

       
       
      </View>
      
    ); 
  }
}
