import React, { useState, useEffect, useContext } from 'react';
import { Text, Image, View, Modal} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { useNavigation } from '@react-navigation/native';

import styles from './EventCard.styles';

import convertDateFormat from '../../utility/convertDateFormat';

// api
import { getOrganizationInfo } from '../../api/organization';
import { registerEvent, unpublishedEvent } from '../../api/event';

// Context
import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';

// Components
import Button from '../MainButton/MainButton.component';


const EventCard = (props) => {

    const navigation = useNavigation();
    const [isModalVisible, setModalVisible] = useState(false);
    const { registeredEvents, setRegisteredEvents, token, roles } = useContext(UserContext);
    const { removePublishedEvent } = useContext(EventContext);
    const [organization, setOrganization] = useState('');
    const [isGroupAdmin, setIsGroupAdmin] = useState(false);

    const registerEventHandler = () => {
        registerEvent(props.event_id, token).then(() => {
            const registeredEventData = {
                "created_at": props.created_at,
                "event_id": props.event_id,
                "event_name": props.title
            }
            setRegisteredEvents([...registeredEvents, registeredEventData]);
            setModalVisible(!isModalVisible);
        })
    }

    const editEventHandler = () => {
        navigation.push("CreateEvent", {
            isEditing: true,
            eventId: props.event_id
        });
        setModalVisible(!isModalVisible);
    }

    const unpublishedEventHandler = () => {
        unpublishedEvent(props.event_id, token).then(res => {
            console.log(res);
        })
    }

    useEffect(() => {
        getOrganizationInfo(props.org).then(res => {
            setOrganization(res);

            roles.map(groupRole => {
                if (res.organization_id == groupRole.organization_id) {
                    if (groupRole.role == "ADMIN" || groupRole.role == "CHAIRMAN") {
                        setIsGroupAdmin(true);
                    }
                }
            });
        })

    }, [isGroupAdmin]);
    
    return(
        <View>
            <TouchableOpacity 
                style={styles.container} 
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Text> {organization.org_name} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> Start Date: {"\n"} {convertDateFormat(props.startDate)} </Text>
                <Text style={styles.date}> End Date: {"\n"} {convertDateFormat(props.endDate)} </Text>

                <Text> {props.link} </Text>
            </TouchableOpacity>
            
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}
                onBackdropPress = { () => this.setState({isVisible:false})}>
                <View style={styles.containerPopUp}>
                    <Text> {organization.org_name} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {props.desc} </Text>
                    <Text style={styles.date}> Start Date: {"\n"} {convertDateFormat(props.startDate)} </Text>
                    <Text style={styles.date}> End Date: {"\n"} {convertDateFormat(props.endDate)} </Text>
                    <Button
                        onPress={registerEventHandler}
                        style={{backgroundColor: '#92d050'}}
                        label="RSVP"
                    />
                    {isGroupAdmin &&
                        <Button
                            onPress={editEventHandler}
                            style={{backgroundColor: '#92d050'}}
                            label="Edit"
                        />
                    }
                    {isGroupAdmin &&
                        <Button
                            onPress={unpublishedEventHandler}
                            style={{backgroundColor: '#92d050'}}
                            label="unpublished Event"
                        />
                    }
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