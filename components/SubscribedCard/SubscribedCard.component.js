import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

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
                    setModalVisible(!isModalVisible)
                }}>
                <Image style={styles.image} source={props.source} />
                <Text style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}{"\n"}</Text>
                    <Text>Theme: {props.theme}{"\n"}</Text>
                    <Text>Perks: {props.perks}</Text>
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text> {props.org} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {props.desc} </Text>
                    <Text style={styles.datePopUp}> {UTCDate} </Text>
                    <Button
                        onPress={() => {
                            removeUserEvents([...userEvents, props.title]);
                            setModalVisible(!isModalVisible);
                            Alert.alert("You have unsubscribed from " + props.title + " on " + props.date + ".");
                            console.log([...userEvents]);
                        }}
                        style={{ backgroundColor: '#92d050' }}
                        label="Unsubscribe"
                    />
                    <Button
                        onPress={() => {
                            setModalVisible(!isModalVisible);
                        }}
                        style={{ backgroundColor: '#CD5C5C' }}
                        label="Exit"
                    />
                </View>
            </Modal>
        </View>
    )
}

export default SubscribedCard;