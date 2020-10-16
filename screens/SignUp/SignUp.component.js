import React, {useState} from 'react';
import {View, Text, TextInput, Alert, Button} from 'react-native';

// Components
import styles from './SignUp.styles';

const SignUp = ({navigation}) => {

    const [email, setEmail] = useState("");

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
        <View>
            <TextInput
                styles={styles.textField}
                placeholder="Email Address"
                onChangeText={text => {
                    setEmail(text);
                }}
                value={email}
            />
            <Button
                styles={styles.signInButtonText}
                title="Sign Up"
                onPress={validateInput}
            />
        </View>
    );
};


export default SignUp;
