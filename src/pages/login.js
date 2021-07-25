import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView, KeyboardAvoidingView, TouchableOpacity, Image } from 'react-native';
import LoginForm from './LoginForm';

export default class Login extends Component {
	render() {
		return (
			<View style={styles.container}>
				<View style={styles.headBackground} />
				<View style={styles.logoOrta}>
					<Image source={require('../img/ek.png')} resizeMode="cover" style={styles.logo} />
					<Text style={styles.logoDescription}>Kotuz Ltd.</Text>
				</View>
				<KeyboardAvoidingView behavior={"position"}>

					<ScrollView>
						<View style={styles.loginArea}>
							<Text style={styles.loginAreaTitle}>Küçük bir başlangıç</Text>
							<Text style={styles.loginAreaDescription}>
								Bir tek sen eksiksin, hemen giriş yap
							</Text>
							<LoginForm />
						</View>
					</ScrollView>
					<View style={styles.signUpArea}>
						<Text style={{ color: "black", textAlign: "center" }}>Hesabınız yok mu?</Text>
						<TouchableOpacity>
							<Text style={{ color: "#1ABC9C", textAlign: "center" }}>Kayıt Ol</Text>
						</TouchableOpacity>
					</View>
				</KeyboardAvoidingView>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		paddingVertical: 40
	},
	headBackground: {
		position: 'absolute',
		top: 0,
		left: 0,
		height: 250,
		width: '100%',
		backgroundColor: '#1ABC9C'
	},
	logo: {
		width: 110,
		height: 110,
		marginLeft: 10,
	},
	logoOrta: {
		justifyContent: 'center',
		alignItems: 'center',
	},
	logoDescription: {
		textAlign: 'center',
		color: '#f2f2f2',
		marginRight: 10,
	},
	loginArea: {
		marginHorizontal: 40,
		marginVertical: 40,
		backgroundColor: '#fff',
		padding: 20,
		borderRadius: 5,
		shadowColor: 'black',
		shadowOpacity: .2,
		shadowRadius: 3,
		shadowOffset: {
			width: 0,
			height: 2
		}
	},
	loginAreaTitle: {
		fontSize: 20,
		textAlign: 'center'
	},
	loginAreaDescription: {
		fontSize: 11,
		color: '#7e868f',
		marginVertical: 10,
		textAlign: 'center'
	},
	signUpArea: {
		alignItems: "center",
		//flexflexdirection: “row”,

	}
});