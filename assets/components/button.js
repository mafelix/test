import React, { Component } from 'react';
import {
	Text,
	View,
	TouchableWithoutFeedback,
	StyleSheet,
} from 'react-native';


var Button = React.createClass({
	getInitialState: function() {
		return ({
			buttonValue: this.props.buttonValue,
		})
	},

	passButtonValue: function() {
		this.props.buttonPress(this.props.buttonValue);
	},

	render: function() {
		return (
		  <TouchableWithoutFeedback
			  	onPress={this.passButtonValue}
			>
				<View style={styles.button}>
					<Text style={styles.buttonText}>
						{this.state.buttonValue}
					</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
});

var styles = StyleSheet.create({
	button: {
		flex: 0.5,
		backgroundColor: 'blue',
		borderColor: 'black',
		borderWidth: 1,
		justifyContent: 'center',
		alignItems: 'center',
		margin: 25,
	},
	buttonText: {
		fontFamily: 'Cochin',
		fontSize: 20,
		color: 'white',
	}
})

module.exports = Button;