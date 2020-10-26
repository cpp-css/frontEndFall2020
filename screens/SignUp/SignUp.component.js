import React, {useState} from 'react';
import { Image, View, Text, TextInput, Alert, Button, TouchableOpacity} from 'react-native';

const axios = require('axios');

import styles from './SignUp.styles';

// Components
import MainButton from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';

const SignUp = ({navigation}) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
            Alert.alert("Please input your student email.");
        } else {
            console.log("valid.");
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
        <View style={styles.container}>
            <TextLabel
                label="Email Address"
                placeholder="jdoe@cpp.edu"
                onChangeText={text => {
                    setEmail(text);
                }}
                value={email}
            />
            <TextLabel
                label="Password"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => {
                    setPassword(text);
                }}
                value={password}
            />
            <MainButton label="Register" onPress={validateInput}/>
        </View>
    );
};


export default SignUp;
