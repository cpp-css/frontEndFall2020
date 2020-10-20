import * as React from 'react';
import {View, Text, Button} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

// styles
import styles from './Home.styles';

// Components
import MainButton from '../../components/MainButton/MainButton.component';

const Home = ({navigation}) => {
  return (
    <View style={styles.view}>
      <Text style={styles.h1}> Club Connect </Text>
      <Text style={styles.spacingLogin}>Made by Computer Science Society </Text>
      <MainButton label="Login" onPress={() => navigation.push('Login')}/>
      <MainButton label="Register" onPress={() => navigation.push('SignUp')}/>
    </View>
  );
};

export default Home;
