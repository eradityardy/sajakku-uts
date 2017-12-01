import React, { Component } from 'react';
import { StyleSheet, View, Image, Text, TextInput, TouchableOpacity,  KeyboardAvoidingView, Alert, AsyncStorage } from 'react-native';

import { StackNavigator } from "react-navigation";

export default class Login extends Component {
	static navigationOptions = {
		header: null
	};
	constructor() {
    super();
    this.state = {
      username: "",
      password: ""
    };
  }
	async onLoginPress() {
    const { username, password } = this.state;
    console.log(username);
    console.log(password);
    await AsyncStorage.setItem("username", username);
    await AsyncStorage.setItem("password", password);
    this.props.navigation.navigate("Boiler");
  }

	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.container}>
			<View style={styles.logoContainer}>
				<Image
					style={styles.logo}
					source={{uri: 'https://pbs.twimg.com/media/DPWWwRGU8AABN7Y.png'}}
				/>
				<Text style={styles.title}>- Aku, kamu, dia, kita, mereka, semua, semesta. Disini bersatu apa adanya. -</Text>
			</View>
			<View style={styles.formContainer}>
				<KeyboardAvoidingView behavior="padding" style={styles.inputcontainer}>
					<View style={styles.inputcontainer}>
						<TextInput
							placeholder="Username"
							placeholderTextColor="#FFFFFF"
							autoCapitalize="none"
							autoCorrect={false}
							value={this.state.username}
						 	onChangeText={username => this.setState({ username })}
							underlineColorAndroid='transparent'
							style={styles.input}
						/>
						<TextInput
							placeholder="Kata Sandi"
							placeholderTextColor="#FFFFFF"
							secureTextEntry
							value={this.state.password}
						 	onChangeText={password => this.setState({ password })}
							underlineColorAndroid='transparent'
							style={styles.input}
						/>
						<TouchableOpacity style={styles.buttonContainer} onPress={this.onLoginPress.bind(this)}>
							<Text style={styles.buttonText}>MASUK</Text>
						</TouchableOpacity>
						<TouchableOpacity style={styles.buttonContainer} onPress={()=> navigate('Signup')}>
							<Text style={styles.buttonText}>REGISTRASI</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#2980b9'
	},
	backgroundImage: {
		flex: 1,
		alignSelf: 'stretch',
		width: null,
		justifyContent: 'center'
	},
	logoContainer: {
		alignItems: 'center',
		flexGrow: 1,
		justifyContent: 'center'
	},
	logo: {
		width: 300,
		height: 200
	},
	title: {
		color: '#000000',
		fontStyle: 'italic',
		marginTop: 1,
		width: 300,
		textAlign: 'center',
		opacity: 0.5
	},
	inputcontainer: {
		padding: 20
	},
	input: {
		height: 40,
		backgroundColor: 'rgba(255,255,255,0.2)',
		marginBottom: 15,
		color: '#FFFFFF',
		paddingHorizontal: 10
	},
	buttonContainer: {
		backgroundColor: '#FFFFFF',
		marginBottom: 15,
		paddingVertical: 10
	},
	buttonText: {
		textAlign: 'center',
		color: '#2980b9',
		fontWeight: 'bold'
	}
});
