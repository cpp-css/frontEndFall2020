import React, { useState, useContext } from 'react';
import { Text, Image, View, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

import { UserContext } from '../../context/UserContext';

let lastPress = 0;

const SubscribedCard = (props) => {

    const { userEvents, removeUserEvents } = useContext(UserContext);

    const onDoublePress = () => {
        const time = new Date().getTime();
        const delta = time - lastPress;

        const DOUBLE_PRESS_DELAY = 400;
        if (delta < DOUBLE_PRESS_DELAY) {
            removeUserEvents([...userEvents, props.title]);
            Alert.alert("You have unsubscribed from " + props.title + " on " + props.date + ".");
            console.log([...userEvents]);
        }
        lastPress = time;
    };

    return (
        <View>
            <TouchableOpacity
                style={styles.container}
                onPress={() => {
                    onDoublePress()
                }}>
                <Text> {props.org} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source} />
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.link} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubscribedCard;