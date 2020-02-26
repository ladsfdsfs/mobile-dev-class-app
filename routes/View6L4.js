import { Text, View, Alert, TouchableHighlight, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';

import {ScrollView} from 'react-native';

const styles = StyleSheet.create({
    container:{
        flex:1
    }
});
function makebutton(name, callback){
    return(<Button title={name} onPress={callback}/>)
}

export default function render6({ navigation }){
    return(<View style={styles.container}>
        <ScrollView horizontal={true}>
            
            {makebutton('dont click')}
            {makebutton('dont click')}
            {makebutton('dont click')}
            {makebutton('dont click')}
            {makebutton('dont click')}
            {makebutton('dont click')}
            {makebutton('dont click')}
            {makebutton('please click', ()=>{
                navigation.navigate('v7')
            })}

        </ScrollView>

    </View>)
}