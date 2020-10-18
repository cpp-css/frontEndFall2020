import * as React from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// Components
import Box from '../../components/Box/Box.component';
import withPreventDoubleClick from '../../components/Btn/Btn.js';
import styles from './Login.styles';

const Btn = withPreventDoubleClick(TouchableOpacity);
const axios = require('axios');

const email = '';
const password = '';
const login = async () => {
  const url = 'https://jsonplaceholder.typicode.com/posts';

  const settings = {
    headers: {
      'Content-Type': 'application/json',
    },
  };

  const body = JSON.stringify({email, password});

  try {
    let response = await axios.get(url,settings,body);

    // use response to authenticate
    console.log(response);
  } catch (error) {
    console.error(error);
  }
};

const Login = () => {
  return (
    <View>
      <Btn
        style={styles.Btn}
        onPress={login}
        title="Login"
        accessibilityLabel="Login">
        <Text style={styles.btnTxt}>Login</Text>
      </Btn>
    </View>
  );
};

export default Login;
