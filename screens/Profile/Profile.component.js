import React, { useContext,useEffect } from 'react';
import { View, Text, Image } from 'react-native';

import styles from './Profile.styles';

// Components
import Button from '../../components/MainButton/MainButton.component';

import { UserContext } from '../../context/UserContext';

const axios = require("axios");

const Profile = ({navigation}) => {

    const { token,name, major, classLevel, role,setUserInfo } = useContext(UserContext);

    const getUserInfo = async () => {
		const url = 'http://10.0.2.2:9090/user/me';

		const settings = {
			headers: {
			  "Content-Type": "application/json",
			  Authorization: "Bearer " + token,
			},
		};

		const body = {
		}

		try {
			let response = await axios.get(url, settings);
			setUserInfo(response.data.user)
		} catch (error) {
			console.error(error);
		}
    }
    
    useEffect(() => {
        getUserInfo();
    }, []);
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} resizeMode="contain" source={require('../../assets/images/Gears.png')}/>
            </View>
            <Text> name: {name}</Text>
            <Text> major: {major}</Text>
            <Text> classLevel: {classLevel}</Text>
            <Text> role: {role}</Text>
            <Button label="Add More Interests" onPress={() => navigation.navigate("contact")}/>
            <Button label="Notification Settings" onPress={() => navigation.navigate("contact")}/>
            <Button label="User Settings" onPress={() => navigation.navigate("User Settings")}/>
            <Button label="Logout" onPress={() => navigation.push('Home')}/>
        </View>
    );
};

export default Profile;
