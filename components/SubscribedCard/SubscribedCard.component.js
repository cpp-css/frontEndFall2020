import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

const axios = require('axios');

const SubscribedCard = (props) => {
    const { userEvents, removeUserEvent } = useContext(UserContext);
    const [isModalVisible, setModalVisible] = useState(false);
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
                    <Text style={styles.title}>{props.event_name}{"\n"}</Text>
                    <Text style={styles.date}> {props.start_date} </Text>
                    <Text style={styles.date}> {props.end_date}{"\n"} </Text>
                    <Text style={styles.title}>{props.info}{"\n"}</Text>
                    <Text>Theme: {props.theme}{"\n"}</Text>
                    <Text>Perks: {props.perks}</Text>
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text style={styles.titlePopUp}> {props.event_name} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {props.info} </Text>
                    <Text style={styles.datePopUp}> {props.start_date} </Text>
                    <Button
                        onPress={() => {
                            removeUserEvents([...userEvents, props.event_name]);
                            setModalVisible(!isModalVisible);
                            Alert.alert("You have unsubscribed from " + props.event_name + " on " + props.date + ".");
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