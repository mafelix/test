import React, { Component } from 'react';
import Camera from 'react-native-camera';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableWithoutFeedback,
  Image,
  TextInput,
} from 'react-native';

var Button = require('../components/button');

class pushTimeSign extends Component {
  constructor(props) {
  super(props);
    this.state = {
      employeeId: '',
      placeholder: '',
    }
  }

  componentWillReceiveProps(nextProp, nextState) {
    console.log(nextProp);
  }

  resetPlaceholder() {
    console.log('we resetting that shit');
    this.setState({placeholder: ''}, () => {console.log(this.state.placeholder)});
    console.log(this.state.placeholder.length);
  }

  submitLoginRequest() {
    console.log('we submitting the mf request');
  }

  buttonPress(input) {
    if (input === 'reset') {
      this.resetPlaceholder()
    } else if (input === 'go') {
      this.submitLoginRequest();
    } else {
      if (this.state.placeholder.length + 1 < 9) {
        this.setState({placeholder: this.state.placeholder + input});
        console.log(input);
      } 
    }
  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 25, alignItems: 'flex-end'}}>
          <Image style={{height:100, width: 150, backgroundColor: 'black', resizeMode: 'contain', margin: 10,}} source={require('../push-logo.png')} />
        </View>

        <View style={styles.border}>
          <View style={styles.textInputContainer}> 
            <Text style={styles.textInput}>
              {this.state.placeholder}
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'1'}
          />
          <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'2'}
          />
          <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'3'}
          />
          <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'go'}
          />
        </View>

         <View style={styles.buttonContainer}>
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'4'}
           />
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'5'}
           />
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'6'}
           />
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'reset'}
           />
        </View>

         <View style={styles.buttonContainer}>
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'7'}
           />
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'8'}
           />
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'9'}
           />
           <Button
            buttonPress={this.buttonPress.bind(this)}
            buttonValue={'0'}
           />
        </View>

      </View>
    );
  }
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  border: {
    flex: 0.6,
    flexDirection: 'row',
    alignItems: 'center',
    borderColor: 'black',
    borderWidth: 1.5,
    borderRadius: 10,
    marginLeft: 25,
    marginRight: 25,
  },
  textInputContainer: {
    flex: 1,  
    flexDirection: 'row', 
    justifyContent: 'center',
    paddingRight: 10,
  },
  textInput: {
    fontSize: 65,
  },
  buttonContainer: {
    flex: 1, 
    flexDirection: 'row',
  },
});

module.exports = pushTimeSign;