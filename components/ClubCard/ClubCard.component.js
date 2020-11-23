import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert, Modal } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from './ClubCard.styles';

import { UserContext } from '../../context/UserContext';
import { EventContext } from '../../context/EventContext';

import Button from '../MainButton/MainButton.component';
// Scrub code needed for the functionality to function well. Delete when dude actually finds out how to manage userClubs.
let joinedClubs = [];

const ClubCard = (props) => {

    const [isModalVisible, setModalVisible] = useState(false);
    const { allEvents } = useContext(EventContext);
    const { userEvents, setAllUserEvents } = useContext(UserContext);
    const { removeUserEvents } = useContext(UserContext);
    const { userClubs, setUserClubs } = useContext(UserContext); // Unused for now
    const { removeUserClubs } = useContext(UserContext); // Unused for now
    let orgEvents; // Needed for addAllClubEvents() and removeAllClubEvents()

    // Adds all events from a particular club
    // 1. Filter from allEvents to get all club's events to a new array
    // 2. Use a loop to iterate through the array and setAllUserEvents
    // NOTE: Do not use setUserEvents() or else there will be bugs.
    // Addtional NOTE: The function doesn't actually need the "orgName"
    // parameter. It can just use "prop.org". However,
    // we might as well have good programming practices or whatever so
    // there is a parameter.
    const addAllClubEvents = (orgName) => {
        orgEvents = allEvents.filter(currEvent => currEvent.org == orgName);
        for ( let i = 0; i < orgEvents.length; i++ ) {
            setAllUserEvents([...userEvents, orgEvents[i].title]);
        }
    }

    // Removes all events from a particular club
    // Same steps as above but removeUserEvents() is reused instead of
    // creating a new case because it works.
    const removeAllClubEvents = (orgName) => {
        orgEvents = allEvents.filter(currEvent => currEvent.org == orgName);
        for (let i = 0; i < orgEvents.length; i++) {
            removeUserEvents([...userEvents, orgEvents[i].title]);
        }
    }

    // Returns a Button that will either subscribe or unsubscribe
    // to the club. It depends if the user subsribed or not already.
    // Subscribing will place all of the respected club's events into
    // the Feed Page. This will also remove all of the club's events
    // from the Events Page. Vise versa for unsubbing.
    // TODO: Add and remove userClubs
    // For now it uses the "joinedClubs" array on line 11.
    const getClubSubStatus = (orgName) => {

        if ( joinedClubs.includes(orgName) ) {
            return <Button
                onPress={() => {
                    Alert.alert("You successfully have unsubscribed to "
                        + orgName + ".");
                    // Following function somehow causes an error in the Events.component.js on line 59. Really pissing me off.
                    //removeUserClubs([...userClubs, orgName]);

                    // Remove club name from "joinedClubs"
                    const index = joinedClubs.indexOf(orgName);
                    if (index > -1) {
                        joinedClubs.splice(index, 1);
                    }

                    removeAllClubEvents(orgName); // Using both this function and removeUserClubs() don't work because I still don't know how states work in React. Something about nonspreadable object.
                    setModalVisible(!isModalVisible);
                    //console.log(userEvents);
                    //console.log(...userClubs);
                }}
                style={{ backgroundColor: '#92d050' }}
                label="Unsubscribe"
            />;
        }

        return <Button
            onPress={() => {
                Alert.alert("You successfully have subscribed to "
                    + orgName + "!");
                //setUserClubs([...userClubs, orgName]);
                addAllClubEvents(orgName);  // Using both this function and setUserClubs() don't work because I still don't know how states work in React Native. Something about nonspreadable object.
                
                // Add club name to "joinedClubs"
                joinedClubs.push(orgName);
                console.log(joinedClubs);

                setModalVisible(!isModalVisible);
                //console.log(userEvents);
                //console.log(...userClubs);
            }}
            style={{ backgroundColor: '#92d050' }}
            label="Subscribe"
        />;
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
                    {getClubSubStatus(props.org)}
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