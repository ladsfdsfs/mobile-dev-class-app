import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight } from 'react-native';
import { RadioButtons } from 'react-native-radio-buttons'


class Question extends Component {
  constructor(props){
    super(props);
    this.state = {ans:false}

  }
  onselect = (opt)=>{
    if(opt==this.props.ans){
      this.setState({ans:true})
    } else {
      this.setState({ans:false})
    }
  }
  
  render() {
    

    
    function createTouch(text, type, that, dis=false){
      return (<TouchableHighlight disabled={dis}  onPress={()=>that.onselect(type)} >
        <Text style={{color:'green', textAlign:'left'}}>{text}</Text>
      </TouchableHighlight>)
    }

    let a = <Text>a thing</Text>

    let b=a;
    for(let x = 0; x<15; x++){
      b+=a;
    }
    if(this.state.ans)
    return (<View style={{margin:"5%", width:'80%', backgroundColor:'#79e58f'}}>
      <Text style={{textAlign:'center'}}>{this.props.q}</Text>
      {createTouch(this.props.a.a, 1, this,true)}
      {createTouch(this.props.a.b, 2, this,true)}
      {createTouch(this.props.a.c, 3, this,true)}
      {createTouch(this.props.a.d, 4, this,true)}
      
    </View>);
    else 
    return (<View style={{margin:"5%",width:'80%'}}>
      <Text style={{textAlign:'center'}}>{this.props.q}</Text>
      {createTouch(this.props.a.a, 1, this)}
      {createTouch(this.props.a.b, 2, this)}
      {createTouch(this.props.a.c, 3, this)}
      {createTouch(this.props.a.d, 4, this)}
      
      
    </View>);
      
  }
}
// <Question q="What is a bear?" a={{a:'a type of cheese', b:'a Toyota model released in 1943', c:'smoky', d:'a smoothie'}}/>



export default class HelloWorldApp extends Component {
  render() {
    return (
      <View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop:"10%" }}>
        
        
        <Text style={{fontSize:20}}>Quiz App thing thats not on android studio</Text>
        <Question q="What is a bear?" a={{a:'a type of cheese', b:'a tree that grows in northern Canada', c:'smoky', d:'a smoothie'}} ans="3"/>

        <Question q="What is Obama's last name?" 
        a={{a:'Screwdriver Handle', b:'Care', c:'Clinton', d:'2004 Toyota Prius'}} 
        ans="2"/>

        <Question q="Who lives in a pineapple under the sea?" 
        a={{a:'Boaty McBoatface',b:'not me lol', c:'Bill Burr', d:'Pollution'}}
        ans="4" />
       
      </View>
      
    ); 
  }
}


/*

{createTouch(this.props.a.a, 1, this)}
      {createTouch(this.props.a.b, 2, this)}
      {createTouch(this.props.a.c, 3, this)}
      {createTouch(this.props.a.d, 4, this)}
*/