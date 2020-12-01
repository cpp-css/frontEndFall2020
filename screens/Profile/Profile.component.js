import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Profile.styles';

// Components
import Button from '../../components/MainButton/MainButton.component';

import { UserContext } from '../../context/UserContext';

const Profile = ({navigation}) => {

    const { name } = useContext(UserContext);

    const logout = () => {
        navigation.push('Home');
    }

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/Gears.png')}/>
            </View>
            <Text> name: {name} </Text>
            <Button label="User Settings" onPress={() => navigation.navigate("User Settings")}/>
            <Button label="Logout" onPress={logout}/>
        </View>
    );
};

export default Profile;
