import { Text, View, Alert, TouchableHighlight, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#8e7eb5',
        flex: 1
    },
    contentWrapper: {
        flex:1,
        marginLeft: '25%',
        width: '75%'
    },
    textView: {
        justifyContent: 'flex-end',
        marginTop: '20%'
        ,flex:1
    },
    viewView: {
        justifyContent:'flex-start',
        flex:2,
        alignItems: 'center',
        
    }

});



export default function render3({ navigation }) {
    return (<View style={styles.container}>
        <View style={styles.contentWrapper}>

            <View style={styles.textView}>
                <Text style={{ fontSize: 30 }}>aww yeah</Text>
                <TouchableHighlight onPress={() => {
                    navigation.navigate('v4')
                }}>
                    <Text style={{ fontSize: 30, color:'blue'}}>lets goo bois</Text>
                </TouchableHighlight>
            </View>
            <View style={styles.viewView}>
                
                <View style={{ backgroundColor: 'grey', width: '40%', height: '25%' }}></View>
                
                <View style={{ backgroundColor: 'grey', width: '40%', height: '25%', marginTop:'75%'}}></View>
            </View>

        </View>
    </View>)
}