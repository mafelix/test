/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

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

var Button = require('./assets/components/button');
export default class pushTimeSign extends Component {
  getInitialstate() {

  }

  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: 1, flexDirection: 'row', justifyContent: 'flex-start', paddingLeft: 25, alignItems: 'flex-end'}}>
          <Image style={{height:100, width: 100, backgroundColor: 'black', resizeMode: 'contain'}} source={require('./assets/push-logo.png')} />
        </View>

        <View style={styles.border}>
          <View style={styles.textInputContainer}> 
            <Text style={styles.textInput}>
              123456789
            </Text>
          </View>
        </View>

        <View style={styles.buttonContainer}>
          <Button
           buttonValue={'1'}
          />
          <Button
           buttonValue={'2'}
          />
          <Button
           buttonValue={'3'}
          />
          <Button
           buttonValue={'go'}
          />
        </View>

         <View style={styles.buttonContainer}>
           <Button
            buttonValue={'4'}
           />
           <Button
            buttonValue={'5'}
           />
           <Button
            buttonValue={'6'}
           />
           <Button
            buttonValue={'reset'}
           />
        </View>

         <View style={styles.buttonContainer}>
           <Button
            buttonValue={'7'}
           />
           <Button
            buttonValue={'8'}
           />
           <Button
            buttonValue={'9'}
           />
           <Button
            buttonValue={'go'}
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
    flex: 0.8,
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
    textAlign: 'right',
    justifyContent: 'flex-end',
    paddingRight: 10,
  },
  textInput: {
    fontSize:  65,
  },
  buttonContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 25,

  },
});

AppRegistry.registerComponent('pushTimeSign', () => pushTimeSign);
