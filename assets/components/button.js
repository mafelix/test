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

	componentDidMount: function() {
		console.log(this.state.buttonValue);
	},

	render: function() {
		return (
		  <TouchableWithoutFeedback>
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
		borderColor: 'black',
		borderWidth: 1 ,
		height: 30,
		width: 20,
		padding: 30,
		justifyContent: 'flex-start',
		alignItems: 'flex-start',
	},
	buttonText: {
		fontSize: 25,
	}
})

module.exports = Button;