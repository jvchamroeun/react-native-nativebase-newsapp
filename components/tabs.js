import React, { Component } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import theme from './theme.js'

export default class TabsExample extends Component {

  trending() {
    Actions.Trending()
  }

  category() {
    Actions.Category()
  }

  search() {
    Actions.Search()
  }

  render() {
    return (
       <Container>
       <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 250}}>
         <Text style={{fontSize: 30, marginBottom: 100, fontStyle: "italic", fontFamily: "Helvetica Neue", letterSpacing: 5,}}> 
            Welcome To
         </Text>
         <TouchableOpacity onPress={this.trending}>
           <Image
              style={{width: 300, height: 300}}
              source={require('../images/logo.png')}
            />
         </TouchableOpacity>
        </View>
        <Content theme={theme} />
        <Footer >
            <FooterTab>
                <Button active>
                    <Icon name='ios-home' />
                </Button>
                <Button onPress={this.trending}>
                    <Icon name='ios-trending-up' />
                </Button>
                <Button onPress={this.search}>
                    <Icon name='ios-search' />
                </Button>
            </FooterTab>
        </Footer>
      </Container>
    );
  }
}