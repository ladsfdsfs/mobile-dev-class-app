import React, { Component } from 'react';
import { Text, View, Button, Alert, TouchableHighlight, StyleSheet } from 'react-native';

import list from './assets/data.json'




const styles = StyleSheet.create({
    qc: { margin: "5%", width: '80%', backgroundColor: '#79e58f' },
    qv: { margin: "5%", width: '80%' }
})

class Question extends Component {
    constructor(props) {
        super(props);
        this.state = { ans: false }

    }

    onselect = (opt) => {
        if (opt == this.props.ans) {
            console.log('correct! closing responses.')
            this.setState({ ans: true })
        } else {
            console.log('wrong answer')
            this.setState({ ans: false })

        }
    }

    render() {

        function createTouch(text, type, that, dis = false) {
            return (<TouchableHighlight disabled={dis} onPress={() => that.onselect(type)} >
                <Text style={{ color: 'green', textAlign: 'left' }}>{text}</Text>
            </TouchableHighlight>)
        }

        let a = <Text>a thing</Text>

        let b = a;
        for (let x = 0; x < 15; x++) {
            b += a;
        }
        if (this.state.ans)
            return (<View style={styles.qc}>
                <Text style={{ textAlign: 'center' }}>{this.props.q}</Text>
                {createTouch(this.props.a.a, 1, this, true)}
                {createTouch(this.props.a.b, 2, this, true)}
                {createTouch(this.props.a.c, 3, this, true)}
                {createTouch(this.props.a.d, 4, this, true)}

            </View>);
        else
            return (<View style={styles.qv}>
                <Text style={{ textAlign: 'center' }}>{this.props.q}</Text>
                {createTouch(this.props.a.a, 1, this)}
                {createTouch(this.props.a.b, 2, this)}
                {createTouch(this.props.a.c, 3, this)}
                {createTouch(this.props.a.d, 4, this)}


            </View>);

    }
}
class Runaway extends Component {
    constructor(props) {
        super(props);
        this.state = { marginTop: '10%', marginLeft: '10%' }
    }

    _onpress(that) {
        let t = Math.floor(Math.random() * 100)
        let l = Math.floor(Math.random() * 100)
        that.setState({ marginTop: t + '%', marginLeft: l + '%' })
    }

    render() {
        return (
            <View style={{ flex: 2, alignSelf: 'flex-start' }}>
                <TouchableHighlight
                    style={{ marginLeft: this.state.marginLeft, marginTop: this.state.marginTop }}
                    onPress={() => this._onpress(this)}
                >
                    <Text style={{ backgroundColor: 'cyan' }}>lolololol</Text>
                </TouchableHighlight>
            </View>
        );
    }

}

class TextCycle extends Component {
    constructor(props) {
        super(props);
        this.state = { t: list.list, c: 0 }
    }

    onpress() {
        if (this.state.c < this.state.t.length - 1) {
            this.setState({ c: this.state.c + 1 })
        } else this.setState({ c: 0 })
    }
    render() {


        return (
            <View style={{ alignItems: 'center' }}>
                <TouchableHighlight underlayColor="#96d0f7" onPress={() => this.onpress()}>
                    <Text style={{ color: 'blue', fontSize: 20 }}>press me change text thing</Text>
                </TouchableHighlight>

                <Text style={{ marginTop: '5%' }}>{this.state.t[this.state.c]}</Text>

            </View>
        )

    }
}


modules.exports.render = function ({ navigation }) {
    return (<View style={{ flex: 1, justifyContent: "flex-start", alignItems: "center", marginTop: "10%" }}>


        <Text style={{ fontSize: 20 }}>Button App thing thats not on android studio</Text>
        <Question q="What is a bear?" a={{ a: 'a type of cheese', b: 'a tree that grows in northern Canada', c: 'smoky', d: 'a smoothie' }} ans="3" />

        <Question q="What is Obama's last name?"
            a={{ a: 'Screwdriver Handle', b: 'Care', c: 'Clinton', d: '2004 Toyota Prius' }}
            ans="2" />

        <Question q="Who lives in a pineapple under the sea?"
            a={{ a: 'Boaty McBoatface', b: 'not me lol', c: 'Bill Burr', d: 'Pollution' }}
            ans="4" />

        <TextCycle />
    </View>);
}



