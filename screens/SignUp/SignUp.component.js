import React, { useState } from 'react';
import { View, Alert } from 'react-native';

const axios = require('axios');

import styles from './SignUp.styles';

// Components
import Button from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';

const SignUp = ({navigation}) => {

    const [registerForm, setRegisterForm] = useState({
        name: "",
        email: "",
        password: ""
    });

    const register = async () => {
        const url = 'http://10.0.2.2:9090/signup';

        try {
            let response = await axios.post(url, registerForm);
            if (!response.data.sucess) {
                Alert.alert(response.data.message);
            } else {
                Alert.alert("You have sucessfully registered.");
                navigation.push("Login");
            }
        } catch (error) {
            console.error(error);
        }
    };

    const validateInput = () => {
        const format = /^([\w\.\-]+)@cpp.edu/;
        if (!format.test(registerForm.email)) {
            Alert.alert("Please input your student email.");
        } else {
            register();
            console.log("valid.");
        }
    };

    return (
        <View style={styles.container}>
            <TextLabel
                label="Name"
                placeholder="Jane Doe"
                onChangeText={text => {
                    setRegisterForm({...registerForm, name: text});
                }}
                value={registerForm.name}
            />
            <TextLabel
                label="Email Address"
                placeholder="jdoe@cpp.edu"
                onChangeText={text => {
                    setRegisterForm({...registerForm, email: text});
                }}
                value={registerForm.email}
            />
            <TextLabel
                label="Password"
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={text => {
                    setRegisterForm({...registerForm, password: text});
                }}
                value={registerForm.password}
            />
            <Button
                label="Register"
                onPress={validateInput}
                containerStyle={styles.containerButton}
            />
        </View>
    );
};


export default SignUp;
