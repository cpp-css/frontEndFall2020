import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// styles
import styles from './Home.styles';

// Debounce Button Error Fix
import withPreventDoubleClick from '../../components/Btn/Btn.js';
const Btn = withPreventDoubleClick(TouchableOpacity);

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.h1}> Club Connect </Text>
      <Text style={styles.spacingLogin}>Made by Computer Science Society </Text>
      <Btn
        style={styles.loginBtn}
        onPress={() => navigation.push('Login')}
        title="Login"
        accessibilityLabel="Login">
        <Text style={styles.btnTxt}>Login</Text>
      </Btn>
      <Text style={styles.spacingBtns}></Text>
      <Btn
        style={styles.signUpBtn}
        onPress={() => navigation.push('SignUp')}
        title="Sign Up"
        accessibilityLabel="Sign Up">
        <Text style={styles.btnTxt}>Sign Up</Text>
      </Btn>
    </View>
  );
};

export default Home;
