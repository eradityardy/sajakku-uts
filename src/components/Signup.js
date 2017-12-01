import React from 'react';
import { StyleSheet, Text, AsyncStorage, View, TextInput, TouchableOpacity, KeyboardAvoidingView, Image } from 'react-native';

import { StackNavigator } from "react-navigation";

export default class Signup extends React.Component {
	static navigationOptions = {
		header: null
	};
	constructor(props) {
		super(props);
		this.state = {
			username: "",
			name: "",
			email: "",
			password: ""
		};
	}
	async onRegisterPress() {
		const { username, name, email, password } = this.state;
		console.log(username);
		console.log(name);
		console.log(email);
		console.log(password);
		await AsyncStorage.setItem("username", name);
		await AsyncStorage.setItem("name", name);
		await AsyncStorage.setItem("email", email);
		await AsyncStorage.setItem("password", password);
		this.props.navigation.navigate("Boiler");
	}

	render() {
		const { navigate } =this.props.navigation;
		return (
			<View style={styles.container}>
			<View style={styles.signupform}>
				<Text style={styles.header}>DAFTAR AKUN</Text>

				<TextInput
					style={styles.textinput}
					placeholder="Username"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.nameInput.focus()}
					value={this.state.username}
					onChangeText={username => this.setState({ username })}
					underlineColorAndroid={'transparent'} />

				<TextInput
					style={styles.textinput}
					placeholder="Name"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.emailInput.focus()}
					ref={(input) => this.nameInput = input}
					value={this.state.name}
					onChangeText={name => this.setState({ name })}
					underlineColorAndroid={'transparent'} />

				<TextInput
					style={styles.textinput}
					placeholder="Email"
					placeholderTextColor="#FFFFFF"
					onSubmitEditing={() => this.passwordInput.focus()}
					ref={(input) => this.emailInput = input}
					value={this.state.email}
					onChangeText={email => this.setState({ email })}
					underlineColorAndroid={'transparent'} />

				<TextInput
					style={styles.textinput}
					placeholder="Password"
					placeholderTextColor="#FFFFFF"
					secureTextEntry
					ref={(input) => this.passwordInput = input}
					value={this.state.password}
					onChangeText={password => this.setState({ password })}
					underlineColorAndroid={'transparent'} />

				<TouchableOpacity onPress={this.onRegisterPress.bind(this)} style={styles.button}>
					<Text style={styles.btntext}>DAFTAR</Text>
				</TouchableOpacity>

			</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: 'center',
		backgroundColor: '#2c3e50',
		paddingLeft: 60,
		paddingRight: 60
	},
	signupform: {
		alignSelf: 'stretch'
	},
	header: {
		fontSize: 25,
		fontWeight: 'bold',
		textAlign: 'center',
		color: '#FFFFFF',
		paddingBottom: 15,
		marginBottom: 40
	},
	textinput: {
		alignSelf: 'stretch',
		backgroundColor: 'rgba(255,255,255,0.2)',
		height: 40,
		marginBottom: 30,
		color: '#FFFFFF',
		paddingHorizontal: 10
	},
	button: {
		alignSelf: 'stretch',
		alignItems: 'center',
		padding: 15,
		backgroundColor: '#fff',
		marginTop: 30,
	},
	btntext: {
		color: '#000000',
		fontSize: 15,
		fontWeight: 'bold'
	}
});
