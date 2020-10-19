import * as React from 'react';
import {View, Text} from 'react-native';

// Components
import styles from './Login.styles';
import MainButton from '../../components/MainButton/MainButton.component';
const axios = require('axios');

const email = '';
const password = '';

const Login = ({navigation}) => {

	const login = async () => {
		const url = 'https://jsonplaceholder.typicode.com/posts';

		const settings = {
			headers: {
				'Content-Type': 'application/json',
			},
		};

		const body = JSON.stringify({email, password});

		try {
			let response = await axios.get(url, settings, body);
			if (response) {
				navigation.push('Main');
			}
			// use response to authenticate
			//console.log(response);
		} catch (error) {
			console.error(error);
		}
	};

	return (
		<View>
			<MainButton label="Login" onPress={login}/>
		</View>
	);
};

export default Login;
