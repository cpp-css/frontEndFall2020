import React from 'react';
import { Text, Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './EventCard.styles';

const EventCard = (props) => {
    return(
        <TouchableOpacity style={styles.container}>
            <Text> {props.title} </Text>
            <Text> {props.org} </Text>
            <Image style={styles.image} resizeMode="contain" source={props.source}/>
            <Text style={styles.date}> {props.date} </Text>
            <Text> {props.link} </Text>
        </TouchableOpacity>
    )
}

export default EventCard;