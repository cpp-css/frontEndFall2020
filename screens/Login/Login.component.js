import React, { useState } from 'react';
import { View, Text, Alert} from 'react-native';

// Components
import styles from './Login.styles';
import MainButton from '../../components/MainButton/MainButton.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextLabel from '../../components/TextLabel/TextLabel.component';

const axios = require('axios');

const Login = ({navigation}) => {

	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');

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

    const validateInput = () => {
        const format = /^([\w\.\-]+)@cpp.edu/;
        if (!format.test(email)) {
            Alert.alert("Please input your student email.");
        } else {
            console.log("valid.");
            login();
        }
    };

	return (
		<View style={styles.view}>
			<TextLabel 
				label="Email Address"
				style={styles.textInput} 
				placeholder="jdoe@cpp.edu"
				onChangeText={ text => {
					setEmail(text);
				}}
			/>
			<TextLabel
				label="Password"
				style={styles.textInput} 
				secureTextEntry={true}
				placeholder="Password"
				onChangeText={ text => {
					setPassword(text);
				}}
			/>
			<MainButton 
				label="Login" 
				onPress={validateInput}
                containerStyle={styles.containerButton}
			/>
			<TouchableOpacity style={styles.forgotLabelContainer}>
				<Text style={styles.forgotLabel}> Forgot password? </Text>
			</TouchableOpacity>
		</View>
	);
};

export default Login;
