import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

import { UserContext } from '../../context/UserContext';

let lastPress = 0;

const axios = require('axios');



const SubscribedCard = (props) => {
    const { userEvents, removeUserEvent } = useContext(UserContext);
    const onDoublePress = () => {
        const time = new Date().getTime();
        const delta = time - lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            unsubToEvent(props.event_id)
        }
        lastPress = time;
    };

    const { token } = useContext(UserContext);

    const subscribeToEvent = async (eventID) => {
		const url = 'http://10.0.2.2:9090/event/register/'+eventID;

		const settings = {
			headers: {
				'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
			},
		};

		try {
            let response = await axios.post(url, settings);
            console.log(response.data);
		} catch (error) {
			console.error(error);
		}
    };
    const unsubToEvent = async (eventID) => {
		const url = 'http://10.0.2.2:9090/event/unregister/'+eventID;

		const settings = {
			headers: {
				'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
			},
		};
        
		try {
            let response = await axios.delete(url, settings);
            
            Alert.alert(response.data.message);
            removeUserEvent(props.event_id);
            console.log(userEvents);
		} catch (error) {
			console.error(error);
		}
    };
    return(
        <View>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => {
                    onDoublePress()
                }}>
                <Text> {props.name} </Text>
                <Text style={styles.title}> {props.info} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.theme} </Text>
                <Text> {props.perks} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubscribedCard;