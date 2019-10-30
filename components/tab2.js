import React, { Component } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { Container, Content, Footer, FooterTab, Button, Icon, Text } from 'native-base';
import { Actions } from 'react-native-router-flux';

import theme from './theme.js'

export default class TabsExample extends Component {

  home() {
    Actions.Main()
  }

  trending() {
    Actions.Trending()
  }

  search() {
    Actions.Search()
  }

  render() {
    return (
       <Container>
         <Container>
          <Content>
            <View style={styles.container}>
              <TouchableOpacity style={{alignItems: 'center'}}>
                <Icon name='ios-business' style={{fontSize: 60, color: '#009387'}} />
                <Text style={styles.text}>Business</Text>
              </TouchableOpacity>

             <TouchableOpacity style={{alignItems: 'center'}}>
                <Icon name='star-half' style={{fontSize: 60, color: '#009387'}} />
                <Text style={styles.text}>Entertainment</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{alignItems: 'center'}}>
                <Icon name='ios-nutrition' style={{fontSize: 60, color: '#009387'}} />
                <Text style={styles.text}>Health</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.containertwo}>
              <TouchableOpacity style={{alignItems: 'center', marginRight: 25}}>
                <Icon name='ios-moon' style={{fontSize: 60, color: '#009387'}} />
                <Text style={styles.text}>Science</Text>
              </TouchableOpacity>

             <TouchableOpacity style={{alignItems: 'center'}}>
                <Icon name='ios-football' style={{fontSize: 60, color: '#009387'}} />
                <Text style={styles.text}>Sports</Text>
              </TouchableOpacity>

              <TouchableOpacity style={{alignItems: 'center'}}>
                <Icon name='ios-desktop' style={{fontSize: 60, color: '#009387'}} />
                <Text style={styles.text}>Technology</Text>
              </TouchableOpacity>
            </View>
        </Content>
         </Container>


          <Footer >
              <FooterTab>
                  <Button onPress={this.home}>
                      <Icon name='ios-home' />
                  </Button>
                  <Button onPress={this.trending}>
                      <Icon name='ios-trending-up' />
                  </Button>
                  <Button active>
                      <Icon name='ios-archive' />
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50
  },
  containertwo: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginLeft: 50,
    marginRight: 35,
    marginTop: 100
  },
  text: {
    fontStyle: "italic", 
    fontFamily: "Helvetica Neue", 
  }
});
