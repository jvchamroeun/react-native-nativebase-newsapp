import React, { Component }from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Router from "./components/router.js"
import Tabs from "./components/tabs.js"


export default class App extends Component {

    render() {
        return (
            <Router/>
        )
    }
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
