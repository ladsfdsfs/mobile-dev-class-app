import { Text, View, Alert, TouchableHighlight, StyleSheet, Button, FlatList } from 'react-native';
import React, { Component } from 'react';

import {CheckBox} from 'react-native-elements';

const styles = StyleSheet.create({
    container:{
        
    },
    contentWrapper:{
        justifyContent:'flex-end',
        // marginTop:'25%'
        
    }
});
export default function helper7(){
    return(<View style={{backgroundColor:'#c1c1c1'}}>
        <Button title="im done" onPress={()=>{console.log('donezo')}}></Button>
        <View style={styles.contentWrapper}>
        <FlatList 
            data={[
                {key:'select1'},
                {key:'select2'},
                {key:'select3'},
                {key:'select4'},
                {key:'select5'},
                {key:'select6'},
                {key:'select7'},
                {key:'select8'},
                {key:'select9'},
                {key:'select10'},
                {key:'select11'},
                {key:'select12'},
                {key:'select13'},
                {key:'select14'},
                {key:'select15'},
                {key:'select16'},
                {key:'select17'},
                {key:'select18'},
                {key:'select19'},
                {key:'select20'},
                {key:'select21'},
                {key:'select22'},
                {key:'select23'}
                


            ]}
            renderItem={({item})=>
                <CheckBox  title={item.key} style={{padding:10}}/>
            }
        />
        </View>
        </View>)
}