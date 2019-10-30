import React, { Component } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Container, Header, List, ListItem, Thumbnail, Text, Left, 
        Body, Right, Content, Footer, FooterTab, Button, Icon } from 'native-base';
import { Actions } from 'react-native-router-flux';

import { getArticles } from './news.js'
import DataItem from './dataItem.js'
import theme from './theme.js'
import Modal from './modal.js'

export default class TabsExample extends Component {

  constructor(props) {
    super(props);

    this.state = {
      isLoading: true,
      data: null,
      setModalVisible: false,
      modalArticleData: {}
    }
  }

  handleItemDataOnPress = (url, title) => {
    this.setState({
      setModalVisible: true,
      modalArticleData: {url, title}
    });
  }

  handleModalClose = () => {
    this.setState({
      setModalVisible: false,
      modalArticleData: {}
    });
  }

  componentDidMount() {
    getArticles().then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong');
    }
    )
  }

  home() {
    Actions.Main()
  }

  category() {
    Actions.Category()
  }

  search() {
    Actions.Search()
  }

  render() {
    // console.log(this.state.modalArticleData);



    let view = this.state.isLoading ? (
      <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', marginTop: 350}}>
        <ActivityIndicator animating={this.state.isLoading}/>
        <Text style={{marginTop: 10}}>Please Wait...</Text>
      </View>
    ) : (
      <List
        dataArray={this.state.data}
        renderRow={(item) => {
          return (
              <DataItem onPress={this.handleItemDataOnPress} data={item} />
            )
        }}
        keyExtractor={(item, index) => index.toString()}
      />
    )

    return (
        <Container>
          <Container>
            <Content>
              {view}
            </Content>
          </Container>

          <Modal
            showModal={this.state.setModalVisible}
            articleData={this.state.modalArticleData}
            onClose={this.handleModalClose}
          />
    
            <Footer >
                <FooterTab>
                    <Button onPress={this.home}>
                        <Icon name='ios-home' />
                    </Button>
                    <Button active>
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

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

