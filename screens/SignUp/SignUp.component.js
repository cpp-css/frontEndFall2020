import React, {useState} from 'react';
import { Image, View, Text, TextInput, Alert, Button, TouchableOpacity} from 'react-native';

const axios = require('axios');

import styles from './SignUp.styles';

// Components
import MainButton from '../../components/MainButton/MainButton.component';
import TextLabel from '../../components/TextLabel/TextLabel.component';

const SignUp = ({navigation}) => {
    const [name,setName] = useState('placeholder')
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const register = async () => {
        const url = 'http://10.0.2.2:9090/signup';

        const settings = {
            headers: {
                'Content-Type': 'application/json',
            },
        };

        const body = {
            name: "placehold",
			email: email, 
			password: password
		}

        try {
            const response = await axios.post(url,body);
            console.log(response.data);
            if(!response.data.success)
				Alert.alert(response.data.message);
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
<<<<<<< HEAD
            <MainButton label="Register" onPress={register}/>
=======
            <MainButton
                label="Register"
                onPress={validateInput}
                containerStyle={styles.containerButton}
            />
>>>>>>> upstream/master
        </View>
    );
};


export default SignUp;
