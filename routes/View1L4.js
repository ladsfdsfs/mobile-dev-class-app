import { Text, View, Alert, TouchableHighlight, StyleSheet } from 'react-native';
import React, { Component } from 'react';


const styles = StyleSheet.create({
    container:{
        flexDirection:'column',
        flex:1,
    },
    top:{
        flex:1,
        flexDirection:'row'
    },
    bot:{
        flexDirection:'row',
        flex:1
    },
    TL:{
        flex:1,
    },
    TR:{
        flex:1,
        alignItems:'flex-end'
        
    },
    BL:{
        flex:1,
        justifyContent:'flex-end',
        marginBottom:'5%'
    },
    BR:{
        flex:1,
        justifyContent:'flex-end',
        alignItems:'flex-end',
        marginBottom:'5%'
    }


});




export default function render1({ navigation }){

    return(<View style={styles.container}>
        <View style={styles.top}>
        <View style={styles.TL}>
            <Text>lol</Text>
        </View>
        <View style={styles.TR}>
            <TouchableHighlight onPress={()=>{
                navigation.navigate('v2');
            }}>
            <Text>aaaaa</Text>
            </TouchableHighlight>
            
        </View>
        </View>
        <View style={styles.bot}>
        <View style={styles.BL}>
            <Text>????</Text>
        </View>
        <View style={styles.BR}>
            <Text>adfa</Text>
        </View>
        </View>
        


    </View>)
}