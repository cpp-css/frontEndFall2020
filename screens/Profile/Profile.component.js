import React, { useContext } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Profile.styles';

// Components
import Button from '../../components/MainButton/MainButton.component';

import { UserContext } from '../../context/UserContext';

const Profile = ({navigation}) => {

    const { name, major, classLevel } = useContext(UserContext);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/Gears.png')}/>
            </View>
            <Text> name: {name}</Text>
            <Text> major: {major}</Text>
            <Text> classLevel: {classLevel}</Text>
            <Button label="Add More Interests" onPress={() => navigation.navigate("contact")}/>
            <Button label="Notification Settings" onPress={() => navigation.navigate("contact")}/>
            <Button label="User Settings" onPress={() => navigation.navigate("User Settings")}/>
            <Button label="Logout" onPress={() => navigation.push('Home')}/>
        </View>
    );
};

export default Profile;
