import React, {useState} from 'react';
import { Image, View, Text, TextInput, Alert, Button, TouchableOpacity} from 'react-native';

import MainButton from '../../components/MainButton/MainButton.component';
const axios = require('axios');

// Components
import styles from './SignUp.styles';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');

    const password = '';
    const register = async () => {
        const url = 'https://jsonplaceholder.typicode.com/posts';

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = JSON.stringify({email, password});

        try {
            let response = await axios.post(url, settings, body);
            console.log(response);
        } catch (error) {
            console.error(error);
        }
    };

    const validateInput = () => {
        const format = /^([\w\.\-]+)@cpp.edu/;
        if (!format.test(email)) {
            Alert.alert('Please input your student email.');
        } else {
            console.log('valid.');
        }
    };
    /*
        const email = () => {
            const doSignUp = () => {
                if (email === "") {
                    Alert.alert("Email Required");
                    setError("Email required *");
                    setValid(false);
                    return;
                } else {
                    Alert.alert("Email is correct");
                }
            }
        }
        */

    return (
        <View>
            <TextInput
                styles={styles.textField}
                placeholder="Email Address"
                onChangeText={text => {
                    setEmail(text);
                }}
                value={email}
            />
            <MainButton label="Register" onPress={validateInput}/>
        </View>
    );
};

export default SignUp;
