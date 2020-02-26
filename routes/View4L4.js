import { Text, View, Alert, TouchableHighlight, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';


const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'column'
    },
    TL:{
        flex:1,
        width:'30%',
        height:'15%',
        backgroundColor:'black'
    },
    overlapContainer:{
        flex:4,
        marginTop:'15%'
        ,marginLeft:'20%'
    },
    s1:{
        backgroundColor:'grey',
        width:'55%',
        height:'25%',
        position:'absolute'

    },
    s2:{
        width:'60%',
        height:'40%',
        marginTop:'20%',
        marginLeft:'20%',
        backgroundColor:'red',
        position:'absolute'
    },
    s3:{
        height:'25%',
        width:'37%',
        backgroundColor:'blue',
        marginLeft:'40%',
        marginTop:'12%',
        position:'absolute'
    },
    s4:{
        height:'10%',
        width:'15%',
        marginLeft:'47%',
        marginTop:'20%',
        position:'absolute',
        backgroundColor:'cyan'

    }


});

export default function render4({ navigation }){
    return (<View style={styles.container}>
        <View style={styles.TL}></View>
        <View style={styles.overlapContainer}>
            <View style={styles.s1}></View>
            <View style={styles.s2}></View>
            <View style={styles.s3}></View>
            <View style={styles.s4}>
                <Button title='go' onPress={()=>{
                    navigation.navigate('v5')
                }}/>
            </View>
        </View>

    </View>)
}