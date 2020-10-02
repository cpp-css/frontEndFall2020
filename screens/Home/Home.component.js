import * as React from 'react';
import { View, Text, Button } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

// styles
import styles from './Home.styles';

const Home = ({navigation}) => {
    return (
        <View style={styles.view}>
            <Text style={styles.h1}> Club Connect </Text>
            <Text style={{marginLeft: 10}}> Made by Computer Science Society </Text>
            <TouchableOpacity style={styles.button}>
                <Button
                    onPress={() => navigation.push('SignIn')}
                    title="Sign In"
                    accessibilityLabel="Sign in"
                />
            </TouchableOpacity>
        </View>
    );
};

export default Home;
