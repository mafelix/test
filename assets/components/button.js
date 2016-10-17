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
			buttonValue: this.props.buttonValue
		})
	},

	render: function() {
		return (
		  <TouchableWithoutFeedback>
				<View style={styles.button}>
					<Text style={styles.buttonText}>
						1
					</Text>
				</View>
			</TouchableWithoutFeedback>
		);
	}
});

var styles = StyleSheet.create({
	button: {
		borderColor: 'black',
		borderWidth: 1,
		backgroundColor: 'blue',
		height: 30,
		width: 20,
		padding: 30,
		justifyContent: 'center',
		alignItems: 'center',
	},
	buttonText: {
		justifyContent: 'center',
		alignItems: 'center',
		fontSize: 25,
		color: 'white',
		backgroundColor: 'red'
	}
})

module.exports = Button;