import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
} from 'react-native';

var Home = require('./assets/views/home');

const ROUTES = {
  home: {title: 'home', component: Home, index: 0}
}

var Main = React.createClass({
  renderScene: function(route, navigator) {
    var Component = ROUTES[route.name].component;
    var title = ROUTES[route.name].title;
    console.log(Component);
    console.log(title);
    console.log(navigator);

    return (
      <Component 
        title={title}
        route={route} 
        navigator={navigator}
      />
    )
  },

  render: function() {
    return (
      <Navigator
        ref={'NAVIGATOR'}
        initialRoute={{name: 'home', index: 0}}
        renderScene={this.renderScene}
        configureScene={() => { return Navigator.SceneConfigs.FloatFromRight }}
      />
    )
  }
})



AppRegistry.registerComponent('pushTimeSign', () => Main);
