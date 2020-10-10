import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// styles
import styles from './Home.styles';

const Home = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.h1}> Club Connect </Text>
            <Text style={styles.spacingLogin}>Made by Computer Science Society </Text>
            <TouchableOpacity
                style={styles.loginBtn}
                onPress={() => navigation.push('Login')}
                title="Login"
                accessibilityLabel="Login">
                <Text style={styles.btnTxt}>Login</Text>
            </TouchableOpacity>
            <Text style={styles.spacingBtns}></Text>
            <TouchableOpacity
                style={styles.signUpBtn}
                onPress={() => navigation.push('SignUp')}
                title="Sign Up"
                accessibilityLabel="Sign Up">
                <Text style={styles.btnTxt}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Home;
