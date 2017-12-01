import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

import { StackNavigator } from "react-navigation";

export default class Boiler extends Component {
  static navigationOptions = {
    header: null
  };
  render() {
    return (
      <View style={styles.wrapper}>
				<View style={styles.logoWrapper}>
					<Text style={styles.logo}>- Selamat Datang di Sajakku -</Text>
				</View>
			</View>
    );
  }
}

const styles = StyleSheet.create({
  wrapper: {
		backgroundColor: '#2980b9',
		flex: 1
	},
	logoWrapper: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center'
	},
  logo: {
    color: 'white',
    fontSize: 20,
    fontStyle: 'italic',
    fontWeight: 'bold',
    marginBottom: 20
  }
});

//AppRegistry.registerComponent("Boiler", () => Boiler);
