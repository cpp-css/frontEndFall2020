import React, {useState} from 'react';
import { Image, View, Text, TextInput, Alert, Button, TouchableOpacity} from 'react-native';

import withPreventDoubleClick from '../../components/Btn/Btn.js';

// Add this when we implement custom buttons from assets
const Btn = withPreventDoubleClick(TouchableOpacity); 

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
            navigation.push('Main');
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
            <Btn
                onPress={validateInput}>
                <Button 
                onPress={validateInput}
                title={'Sign Up'}></Button>
                {/* Image not showing up*/}
                {/* <Image 
                resizeMode={'cover'}
                source={require('../../assets/images/Sign Up.png')} 
                styles={styles.signInButtonText}
                resizeMode={'cover'}/> */}
            </Btn>
        </View>
    );
};


export default SignUp;
