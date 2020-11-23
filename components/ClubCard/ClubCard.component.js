import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ClubCard.styles';

import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';

import Button from '../MainButton/MainButton.component';

const ClubCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const { allEvents } = useContext(EventContext);
    const { userEvents, setAllUserEvents } = useContext(UserContext);
    const { removeUserEvents } = useContext(UserContext);
    let orgEvents;

    const addAllClubEvents = (orgName) => {
        orgEvents = allEvents.filter(currEvent => currEvent.org == orgName);
        for ( let i = 0; i < orgEvents.length; i++ ) {
            setAllUserEvents([...userEvents, orgEvents[i].title]);
        }
    }

    function removeAllClubEvents(orgName) {
        orgEvents = allEvents.filter(currEvent => currEvent.org == orgName);
        console.log("MY EVENTS\n" + orgEvents);
        for (let i = 0; i < orgEvents.length; i++) {
            removeUserEvents([...userEvents, orgEvents[i].title]);
        }
    }

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    setModalVisible(!isModalVisible)
                }}>
                <Image style={styles.image} source={props.source} />
                <Text style={styles.textContainer}>
                    <Text style={styles.org}> {props.org}{"\n"} </Text>
                    <Text> Related to: {props.relatedTo} </Text>
                </Text>
            </TouchableOpacity>
            <Modal animationType="slide"
                transparent={true}
                visible={isModalVisible}>
                <View style={styles.containerPopUp}>
                    <Text style={styles.orgPopUp}> {props.org} </Text>
                    <Image style={styles.imagePopUp} source={props.source} />
                    <Text style={styles.linkPopUp}> {props.link} </Text>
                    <Text style={styles.infoPopUp}> {props.info} </Text>
                    <Text style={styles.relatedToPopUp}> Related to: {props.relatedTo} </Text>
                    <Button
                        onPress={() => {
                            Alert.alert("You successfully have subscribed to "
                                + props.org + "!");
                            //setUserClubs([...userClubs, props.org]); // Error: No name or something
                            addAllClubEvents(props.org);
                            setModalVisible(!isModalVisible);
                            //console.log(userEvents);
                        }}
                        style={{ backgroundColor: '#92d050' }}
                        label="Subscribe"
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

export default ClubCard;