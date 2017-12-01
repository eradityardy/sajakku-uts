import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  StatusBar
} from 'react-native';

import Splash from './Splash';
import Login from './src/components/Login/Login';
import Signup from './src/components/Signup/Signup';
import Boiler from './Boiler';

import { StackNavigator } from "react-navigation";

class Home extends Component<{}> {
  static navigationOptions = {
    headerStyle: {
      backgroundColor: "#c0392b",
      elevation: null
    },
    header: null
  };
  render() {
    return (
      <View style={styles.container}>
        <StatusBar barStyle="light-content" backgroundColor="#c0392b" />
        <Login navigation={this.props.navigation} />
      </View>
    );
  }
}

export default App = StackNavigator ({
  Home: {
    screen: Home,
    navigationOptions: {
      title: "Home"
    }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      title: "Login"
    }
  },
  Signup: {
    screen: Signup,
    navigationOptions: {
      title: "Signup"
    }
  },
  Boiler: {
    screen: Boiler,
    navigationOptions: {
      title: "Boiler"
    }
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});
