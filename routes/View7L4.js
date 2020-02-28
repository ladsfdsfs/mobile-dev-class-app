import { Text, View, Alert, TouchableHighlight, StyleSheet, Button, FlatList } from 'react-native';
import React, { Component } from 'react';


import V7helper from './V7helper'

const styles = StyleSheet.create({
    container:{
        justifyContent:'flex-end'
    },
    contentWrapper:{
        justifyContent:'flex-end',
        // marginTop:'25%'
        marginTop: 60,
    }
});

export default function render7({ navigation }){
    return(<View style={styles.container}>
        <View style={{height:'90%'}}>
            <View style={{alignItems:'center'}}>
                <Text style={{fontSize:20}}>haha here is a text view</Text>
            </View>
            {V7helper()}
        </View>
    </View>)
}
