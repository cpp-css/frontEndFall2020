import React from 'react';
import { Text, Image, TouchableWithoutFeedback, View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './EventCard.styles';

const EventCard = (props) => {
    return(
        <TouchableOpacity style={styles.container} onPress={props.onPress}>
            <Text> {props.org} </Text>
            <Text style={styles.title}> {props.title} </Text>
            <Image style={styles.image} resizeMode="contain" source={props.source}/>
            <Text style={styles.date}> {props.date} </Text>
            <Text> {props.link} </Text>
        </TouchableOpacity>
    )
}

export default EventCard;