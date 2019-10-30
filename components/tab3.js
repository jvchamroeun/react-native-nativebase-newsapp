import React, { Component } from 'react';
import { Alert } from 'react-native';
import { StyleSheet, View, ActivityIndicator } from 'react-native';
import { Container, Header, List, ListItem, Thumbnail, Text, Left, 
        Body, Right, Content, Footer, FooterTab, Button, Icon, Item, Input} from 'native-base';
import { Actions } from 'react-native-router-flux';

import { Search } from "./search.js"
import { API_URL_2, API_KEY } from "./constants.js";
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
      modalArticleData: {},
      query: 'bitcoin',
      function: Search
    }
    this._handlePress = this._handlePress.bind(this);
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

  // componentDidMount() {
  //   Search(this.state.query).then(data => {
  //     this.setState({
  //       isLoading: false,
  //       data: data
  //     });
  //   }, error => {
  //     Alert.alert('Error', 'Something went wrong');
  //   }
  //   )

  //   console.log(this.state.data)
  // }

  _handlePress() {
    console.log(this.state.query)
    this._resetValue();
     Search(this.state.query).then(data => {
      this.setState({
        isLoading: false,
        data: data
      });
    }, error => {
      Alert.alert('Error', 'Something went wrong');
    }
    )
  }

  _resetValue() {
    this.setState({
        isLoading: true,
        data: null
      });
  }


  home() {
    Actions.Main()
  }

  category() {
    Actions.Category()
  }

  trending() {
    Actions.Trending()
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
            <Header searchBar rounded style={{ height: 15 }}>
                  <Item style={{ top: -22 }}>
                    <Icon name='ios-search' />
                    <Input placeholder='Search' 
                           onChange={val => {this.setState({query: val.nativeEvent.text})}}/>
                    <Icon name='ios-people' />
                  </Item>
                  <Button transparent style={{ top: -22 }} onPress={this._handlePress}>
                    <Text>Search</Text>
                  </Button>
            </Header>
        

          
            <Content>
              {view}
            </Content>
          
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
                    <Button onPress={this.trending}>
                        <Icon name='ios-trending-up' />
                    </Button>
                    <Button active>
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


//             <Container>
//             <Content>
//               {view}
//             </Content>
//           </Container>

//            <Container>
//             <Footer >
//                 <FooterTab>
//                     <Button onPress={this.home}>
//                         <Icon name='ios-home' />
//                     </Button>
//                     <Button onPress={this.trending}>
//                         <Icon name='ios-trending-up' />
//                     </Button>
//                     <Button onPress={this.category}>
//                         <Icon name='ios-archive' />
//                     </Button>
//                     <Button active>
//                         <Icon name='ios-search' />
//                     </Button>
//                 </FooterTab>
//             </Footer>
//           </Container>