import React, { useState, useEffect, useContext } from 'react';
import { Text, Image, View, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

// api
import { getPublishedEvent, unregisterEvent } from "../../api/event";
import { getOrganizationInfo } from '../../api/organization';

// Context
import { UserContext } from '../../context/UserContext';

// Component
import Button from '../MainButton/MainButton.component';

const SubscribedCard = (props) => {

    const [event, setEvent] = useState({});
    const [organization, setOrganization] = useState({});
    const [isModalVisible, setModalVisible] = useState(false);
    const { token, removeRegisteredEvent } = useContext(UserContext);

    const convertDateFormat = (date) => {
        return new Date(date).toString();
    }

    const unregisterEventHandler = () => {
        unregisterEvent(props.event_id, token).then(() => {
            removeRegisteredEvent(props.event_id);
            setModalVisible(!isModalVisible);
        })
    }

    useEffect(() => {
        getPublishedEvent(props.event_id).then(eventInfo => {
            setEvent(eventInfo);
            getOrganizationInfo(eventInfo.organization_id).then(group => {
                setOrganization(group);
            })
        }).catch(error => {
            console.error(error);
        })
    }, []);

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Image style={styles.image} source={props.source} />
                <Text style={styles.textContainer}>
                    <Text style={styles.title}>{props.title}{"\n"}</Text>
                    <Text>Theme: {event.theme}{"\n"}</Text>
                    <Text>Perks: {event.perks}</Text>
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text> {organization.org_name} </Text>
                    <Text style={styles.titlePopUp}> {props.title} </Text>
                    <Image style={styles.imagePopUp} resizeMode="contain" source={props.source} />
                    <Text style={styles.descPopUp}> {event.info} </Text>
                    <Text> StartDate: {convertDateFormat(event.start_date)} </Text>
                    <Text> EndDate: {convertDateFormat(event.end_date)} </Text>
                    <Button
                        onPress={unregisterEventHandler}
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