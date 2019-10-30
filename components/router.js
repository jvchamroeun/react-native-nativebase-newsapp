import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import { AppLoading } from 'expo';

import { Scene, Router, Stack } from 'react-native-router-flux';

import Main from "./tabs.js"
import Tab1 from './tab1';
import Tab2 from './tab2';
import Tab3 from './tab3';

export default class extends React.Component {
    state = {
        isReady: false
    };

    componentDidMount() {
        setTimeout(()=> this.setState({isReady: true}), 1000)
    }

    render() {
        let navTitleStyle = { fontSize: 15 , fontFamily: "HelveticaNeue-Medium", color: '#fff', letterSpacing: 0.4 };

        if (!this.state.isReady)
            return <AppLoading/>

        return (
            <Router>
                <Stack key="root"
                       navigationBarStyle={{backgroundColor: "#009387"}}
                       titleStyle={navTitleStyle}
                       backButtonTintColor = '#FFF'
                       backButtonTextStyle = {{color:'#FFF'}}
                       // hideNavBar={true}
                       duration={0}>

                    <Scene key="Main" component={Main} title="Main" hideNavBar={true} initial/>
                    <Scene key="Trending" component={Tab1} title="Trending"/>
                    <Scene key="Category" component={Tab2} title="Category"/>
                    <Scene key="Search" component={Tab3} title="Search"/>
                </Stack>
            </Router>
        )
    }
}

// class Main extends React.Component {
//     render() {
//         return (
//             <View style={styles.container}>
//                 <Text>Open up App.js to start working on your app!</Text>
//                 <Text>Changes you make will automatically reload.</Text>
//                 <Text>Shake your phone to open the developer menu.</Text>
//             </View>
//         );
//     }
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         backgroundColor: '#fff',
//         alignItems: 'center',
//         justifyContent: 'center',
//     },
// });