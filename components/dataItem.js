import React, { Component } from 'react';
import { ListItem, Left, Thumbnail, Body, Right, Text, Button } from 'native-base';


export default class DataItem extends Component {

  constructor(props) {
    super(props);
    this.data = props.data;
  }

  handlePress = () => {
    const { url, title } = this.data;
    this.props.onPress(url, title);
  }

  render(){
    return(
        <ListItem thumbnail>
          <Left>
            <Thumbnail square source={{ 
              uri: this.data.urlToImage != "" | null ? this.data.urlToImage : 'https://picsum.photos/id/1071/200/300'
            }} />
          </Left>
          <Body>
            <Text>{this.data.title}</Text>
            <Text note numberOfLines={2}>{this.data.description}</Text>
          </Body>
          <Right>
            <Button transparent onPress={this.handlePress}>
              <Text>View</Text>
            </Button>
          </Right>
        </ListItem>
      );
  }
}