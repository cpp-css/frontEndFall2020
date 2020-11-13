import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Context } from '../../Context';
import styles from './EventCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';

const axios = require('axios');

const EventCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const { userEvents, addUserEvent } = useContext(UserContext);
    const { token } = useContext(UserContext);

    const subscribeToEvent = async (eventID) => {
		const url = 'http://10.0.2.2:9090/event/register/'+eventID;

		const settings = {
			headers: {
				'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
			},
		};

		const body = {
		}

		try {
            let response = await axios.post(url, body, settings);
            console.log(response.data);
            Alert.alert(response.data.message);
            addUserEvent({
                created_at : props.created_at,
                event_id: props.event_id,
                event_name: props.name,
                info: props.info,
                date: props.end_date,
                perks: props.perks,
                theme: props.theme,
            })
		} catch (error) {
			console.error(error);
		}
    };
    const deleteEvent = async (eventID) => {
		const url = 'http://10.0.2.2:9090/event/delete_event/'+eventID;

		const settings = {
			headers: {
				'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + token
			},
		};

		const body = {
		}

		try {
            let response = await axios.delete(url, settings);
            console.log(response.data);
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
                <Text> {props.name} </Text>
                <Text style={styles.title}> {props.info} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.theme} </Text>
                <Text> {props.perks} </Text>
            </TouchableOpacity>
            
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onBackdropPress = { () => this.setState({isVisible:false})}
                >
                
                <View style={styles.containerPopUp}>
                    <Text> {props.name} </Text>
                    <Text style={styles.titlePopUp}> {props.info} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {props.desc} </Text>
                    <Text style={styles.datePopUp}> {props.date} </Text>
                    <Text> {props.theme} </Text>
                    <Text> {props.perks} </Text>
                    <Button
                        onPress={() => {
                            subscribeToEvent(props.event_id);
                            setModalVisible(!isModalVisible);
                        }}
                        style={{backgroundColor: '#92d050'}}
                        label="RSVP"
                    />
                    <Button
                        onPress={() => {
                            setModalVisible(!isModalVisible);
                        }}
                        style={{backgroundColor: '#CD5C5C'}}
                        label="Exit"
                    />
                </View>
            </Modal>
           
        </View>
    )
}

export default EventCard;