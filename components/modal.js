import React, { Component }from 'react';
import { Dimensions, WebView, Modal } from 'react-native';
import { Container, Header, Content, Body, Left, Icon, Title, Button } from 'native-base';

const webViewHeight = Dimensions.get('window').height - 56;

class ModalComponent extends Component {

	constructor(props) {
		super(props);
	}

	handleClose = () => {
		return this.props.onClose();
	}

    render() {
    	const { showModal, articleData } = this.props;
    	const { url } = articleData;
    	if ( url != undefined ) {
	        return (
	        	<Modal
	        		animationType="slide"
	        		transparent
	        		visible={showModal}
	        		onRequestClose={this.handleClose}
	        	>

	        		<Container style={{margin: 15, marginBottom: 0, backgroundColor: '#fff'}}>
	        			<Header style={{backgroundColor: '#009387' }}>
	        				<Left>
	        					<Button onPress={this.handleClose} transparent>
	        						<Icon name="close" style={{color:'white', fontSize: 24}}/>
	        					</Button>
	        				</Left>
	        				<Body>
	        					<Title children={articleData.title} style={{color: 'white', marginLeft: -150}}/>
	        				</Body>
	        			</Header>

	        			<Content contentContainerStyle={{height: webViewHeight}}>
	        				<WebView source={{uri: url}} style={{flex: 1}} 
	        				onError={this.handleClose} startInLoadingState
	        				useWebKit
	        				/>
	        			</Content>
	        		</Container>
	        	</Modal>
	        );
	    } else {
	    	return null;
	    }
    }
}

export default ModalComponent;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
