import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar,
  AppRegistry,
  Navigator
} from 'react-native';

import { StackNavigator } from "react-navigation";

import Splash from './Splash';
import Login from './src/components/Login';
import Signup from './src/components/Signup';
import Boiler from './Boiler';

export default class Indeks extends Component<{}> {
  static navigationOptions = {
    header: null
  };

  render() {
  const { navigation } = this.props;
  const { navigate } = this.props.navigation;
    return (
      <View style={styles.container}>
        <Splash navigation={this.props.navigation} />
      </View>
    );
  }
}

const Navigasi = StackNavigator ({
  Splash: { screen: Splash },
  Login: { screen: Login },
  Signup: { screen: Signup },
  Boiler: { screen: Boiler }
});

AppRegistry.registerComponent('sajakku', () => Navigasi);
