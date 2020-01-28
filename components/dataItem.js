import React, { Component } from 'react';
import {TouchableOpacity, Dimensions } from 'react-native';
import { ListItem, Left, Thumbnail, Body, Right, Text, Button } from 'native-base';

var { width, height } = Dimensions.get("window");


export default class DataItem extends Component {

  constructor(props) {
    super(props);
    this.data = props.data;
    this.icon = null;
  }

   async componentDidMount() {
    let icon = await `https://cryptoicons.org/api/icon/${props.data.symbol}/200`

    console.log(icon)
  }

  render(){
    return(
        <ListItem thumbnail style={{width: width - 50}}>
        <TouchableOpacity onPress={this.handlePress}>
            <Thumbnail style={{width: width - 30, height: 150}} 
            source={{ 
              uri: this.data.urlToImage != null ? this.data.urlToImage : 'https://picsum.photos/id/1071/200/300'
            }} />
          <Body>
            <Text>{this.data.title}</Text>
            <Text note numberOfLines={2}>{this.data.description}</Text>
          </Body>
        </TouchableOpacity>
        </ListItem>
      );
  }
}