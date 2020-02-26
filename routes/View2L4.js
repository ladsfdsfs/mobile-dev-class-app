import { Text, View, Alert, TouchableHighlight, StyleSheet, Button } from 'react-native';
import React, { Component } from 'react';


const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    TB: {
        flex: 1
        ,alignItems:'center'
    },
    BB: {
        flex: 3
    },
    bT: {
        flex: 1
        ,justifyContent:'flex-end'
    },
    bB: {
        flex: 1
        ,alignItems:'flex-end'
    }


}
);

export default function render2({ navigation }) {
    return (<View style={styles.container}>
        <View style={styles.TB}>
            <View style={{
                flex:1,
                width:'60%',
                backgroundColor:'green'
                ,justifyContent:'center'
            }}>
                <Button  title="press to go" onPress={() => {
                    navigation.navigate('v3')
                }} color="white">


                </Button>
            </View>
        </View>
        <View style={styles.BB}>
            <View style={styles.bT}>
                <View style={{
                    width:"25%",
                    height:'25%'
                    ,backgroundColor:'grey'
                    ,marginLeft:'30%'
                }}>

                </View>
            </View>
            <View style={styles.bB}>
                <View style={{
                    width:"25%",
                    height:'25%',
                    backgroundColor:'grey',
                    marginRight:'20%'
                    
                }}>

                </View>

            </View>
        </View>

    </View>)
}