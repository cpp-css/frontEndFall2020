import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// styles
import styles from './Home.styles';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.h1}> Club Connect </Text>
      <Text style={{marginLeft: 10}}> Made by Computer Science Society </Text>
      <TouchableOpacity style={styles.loginBtn}>
        <Text
          style={styles.btnTxt}
          onPress={() => navigation.push('Login')}
          title="Login"
          accessibilityLabel="Login">
          Login
        </Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.signUpBtn}>
        <Text
          style={styles.btnTxt}
          onPress={() => navigation.push('SignUp')}
          title="Sign Up"
          accessibilityLabel="Sign Up">
          Sign Up
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
