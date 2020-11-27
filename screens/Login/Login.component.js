import React, { useState, useContext } from 'react';
import { View, Text, Alert} from 'react-native';

// Components
import styles from './Login.styles';
import MainButton from '../../components/MainButton/MainButton.component';
import { TouchableOpacity } from 'react-native-gesture-handler';
import TextLabel from '../../components/TextLabel/TextLabel.component';

import { UserContext } from '../../context/UserContext';

const axios = require('axios');

const Login = ({navigation}) => {

	const { setToken, setUser, setIsAdmin } = useContext(UserContext);

	const [loginForm, setLoginForm] = useState({
		email: "",
		password: ""
	});

	const checkAdmin = (roles) => {
		if (roles.length < 1) {
			setIsAdmin(false);
		} else {
			roles.map(group => {
				group.role == ("ADMIN" || "CHAIRMAN") ? setIsAdmin(true) : null;
			})
		}
	}

	const getUserData = async (userToken) => {
	
		const url = "http://10.0.2.2:9090/user/me";
		console.log("USERDATA: " + userToken);
		const settings = {
			headers: {
			  "Content-Type": "application/json",
			  "Authorization": "Bearer " + userToken,
			},
		};

		try {
			let response = await axios.get(url, settings);
			if (!response.data.user) {
				Alert.alert(response.data.message);
			} else {
				setUser(response.data.user);
				checkAdmin(response.data.user.roles);
			}
		} catch (error) {
			console.error(error);
		}
	}

	const login = async () => {
		const url = "http://10.0.2.2:9090/login";

		try {
			let response = await axios.post(url, loginForm);

			if (!response.data.session) {
				Alert.alert(response.data.message);
			} else {
				setToken(response.data.session.token);
				navigation.push("Main");
				getUserData(response.data.session.token);
			}

		} catch (error) {
			console.error("Login: " + error);
		}
	};


    const validateInput = () => {
        const format = /^([\w\.\-]+)@cpp.edu/;
        if (!format.test(loginForm.email)) {
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
					setLoginForm({...loginForm, email: text});
				}}
			/>
			<TextLabel
				label="Password"
				style={styles.textInput} 
				secureTextEntry={true}
				placeholder="Password"
				onChangeText={ text => {
					setLoginForm({...loginForm, password: text});
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
