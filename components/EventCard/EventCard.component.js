import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
//import { Context } from '../../Context';
import styles from './EventCard.styles';

import { UserContext } from '../../context/UserContext';

import Button from '../MainButton/MainButton.component';
import { useNavigation } from '@react-navigation/native'

const axios = require('axios');

const axios = require('axios');

const EventCard = (props) => {

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);

    const { userEvents, addUserEvent, setCurrentEvent } = useContext(UserContext);
    const { token } = useContext(UserContext);

    //const UTCDate = new Date(props.startDate).toString();

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

                event_name: props.event_name,
                info: props.info,
                start_date: props.start_date,
                end_date: props.end_date,

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
            let response = await axios.delete(url, body, settings);
            Alert.alert(response.data.message);
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

                <Text> {props.event_name} </Text>
                <Text style={styles.title}> {props.info} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {props.start_date} </Text>
                <Text style={styles.date}> {props.end_date} </Text>

                <Text> {props.theme} </Text>
                <Text> {props.perks} </Text>
            </TouchableOpacity>
            
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onBackdropPress = { () => this.setState({isVisible:false})}>
                
                <View style={styles.containerPopUp}>

                    <Text> {props.event_name} </Text>
                    <Text style={styles.titlePopUp}> {props.info} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {props.desc} </Text>
                    <Text style={styles.datePopUp}> {props.start_date} </Text>
                    <Text style={styles.datePopUp}> {props.end_date} </Text>
                    <Text> {props.theme} </Text>
                    <Text> {props.perks} </Text>
                    <ScrollView>
                        <Button
                            onPress={() => {
                                    //Alert.alert("You successfully have registered for " + props.title + " on " + props.startDate + "!");
                                subscribeToEvent(props.event_id);
                                setModalVisible(!isModalVisible);
                            }}
                            style={{backgroundColor: '#92d050'}}
                            label="RSVP"
                        />
                        <Button
                        onPress={() => 
                                {
                                    setModalVisible(!isModalVisible);
                                    setCurrentEvent(props)
                                    console.log(props)
                                    navigation.navigate('EditEvent')
                            }}
                            style={{backgroundColor: '#CEB888'}}
                            label="Edit"
                        />
                        <Button
                            onPress={() => {
                                setModalVisible(!isModalVisible);
                            }}
                            style={{backgroundColor: '#CD5C5C'}}
                            label="Exit"
                        />
                    </ScrollView>

                </View>
            </Modal>
           
        </View>
    )
}

export default EventCard;