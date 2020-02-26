import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight, StyleSheet } from 'react-native';

import { AsyncStorage } from 'react-native';

import Slider from 'react-native-slider';

const styles = StyleSheet.create({
    TL: {
        marginLeft: '10%',
        marginTop: '10%',
        
    },
    TR: {
        marginTop: '15%',
        marginLeft: '50%'
    },
    BR: {
        marginBottom: '10%',
        marginLeft: '70%'

    },
    BL: {
        marginTop:'60%',
        marginLeft: '10%'

    }

})

class Lab extends Component {
    constructor(props){
        super(props)
        this.state={
            size:20
        }
        

    }
    storeData = async (key,data) => {
        //console.log(data)
        try {
            await AsyncStorage.setItem('@data'+key, 'n'+data)

        } catch (error) {
            console.log('fuck, something happened')
            console.error(error)
        }
    }
    _getData = async (key) => {
        try{
            const value = await AsyncStorage.getItem('@data'+key)
            if(value!=null){
                let num = value.substring(1)
                
                return num;
            } else {
                console.log('oh no')
            }
        } catch(e){

        }
    }
    onselect = function (data) {
        //console.log(data)
        Alert.alert(data+' was pressed')
        this._getData(data).then(val=>{
            console.log(`Clicks stored for button ${data}: ${+val+1}`)
            this.storeData(data, +val+1);
        })
        
        
        
    }
    render() {
        return (
            <View style={{ marginTop: '10%' }}>
                <View style={{ flex: 1, flexDirection: 'row' , alignContent:'stretch'}}>
                    <View style={{ width: '50%', justifyContent: 'flex-start' }}>
                        <TouchableHighlight style={styles.TL} onPress={() => this.onselect(1)}><Text style={{fontSize:this.state.size}}>text 1</Text></TouchableHighlight>
                    </View>
                    <View style={{  width: '50%',marginTop:'5%', justifyContent: 'flex-end' }}>
                        <TouchableHighlight style={styles.TR} onPress={() => this.onselect(2)}><Text style={{fontSize:this.state.size}}>text 2</Text></TouchableHighlight>
                    </View>
                    
                </View>
                <View style={{flex:5, marginTop:'100%', flexGrow:20}}>
                    <TouchableHighlight style={styles.BL} onPress={() => this.onselect(3)}><Text style={{fontSize:this.state.size}}>text 3</Text></TouchableHighlight>
                    <TouchableHighlight style={styles.BR} onPress={() => this.onselect(4)}><Text style={{fontSize:this.state.size}}>text 4</Text></TouchableHighlight>
                </View>

               <Slider onValueChange={value=>this.setState({size:Math.floor(20*value+5)})}/>

            </View>
        )
    }
}


export default function renderL3({ navigation }) {

    return (<View>
        <Lab />
    </View>)



}