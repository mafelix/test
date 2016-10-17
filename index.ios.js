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
  render() {
    return (
      <View style={styles.mainContainer}>
        <View style={{flex: 1, backgroundColor: 'black', flexDirection: 'row', justifyContent: 'flex-start'}}>
          <Image style={{height:50, width: 50}} source={require('./assets/push-logo.png')} />
        </View>

        <View style={styles.textInputContainer}> 
          <TextInput 
            style={{borderColor: 'black', borderRadius: 2, borderWidth: 1, flex: 1}}
          />
        </View>

        <View style={styles.buttonContainer}>
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'go'}
           />
        </View>

         <View style={styles.buttonContainer}>
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'go'}
           />
        </View>

         <View style={styles.buttonContainer}>
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'1'}
           />
           <Button
            buttonValue={'1'}
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
  textInputContainer: {
    flex: 1,  
    flexDirection: 'row', 
    justifyContent: 'center',
  },
  buttonContainer: {
    flex: 1, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 30,

  },
});

AppRegistry.registerComponent('pushTimeSign', () => pushTimeSign);
