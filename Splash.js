import React, { Component } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Button } from 'react-native';
import { StackNavigator } from "react-navigation";

export default class Splash extends Component {
	static navigationOptions = {
    header: null
  };

	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.wrapper}>
				<View style={styles.logoWrapper}>
					<Image
						style={styles.logo}
						source={{uri: 'https://pbs.twimg.com/media/DPoJmfDVwAAps7R.png'}}
					/>
				</View>
				<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate('Login')}>
					<Text style={styles.buttonText}>MASUK</Text>
				</TouchableOpacity>
				<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate('Signup')}>
					<Text style={styles.buttonText}>REGISTRASI</Text>
				</TouchableOpacity>
				<View>
					<Text style={styles.subtitle}>- Ekspresi tanpa Kekangan -</Text>
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
	logo: {
		width: 400,
		height: 300
	},
	logoWrapper: {
		justifyContent: 'center',
		flex: 1,
		alignItems: 'center'
	},
	buttonContainer: {
		backgroundColor: '#34495e',
		margin: 15,
		paddingVertical: 10
  },
	buttonText: {
		textAlign: 'center',
		color: '#FFF',
		fontWeight: 'bold'
//		fontStyle: 'italic'
	},
	subtitle: {
		color: 'white',
		fontWeight: '200',
		paddingBottom: 20,
		textAlign: 'center',
		fontSize: 15,
		fontStyle: 'italic'
	},
});
