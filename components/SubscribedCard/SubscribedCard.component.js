import React, { useState } from 'react';
import { Text, Image, TouchableWithoutFeedback, View, Button, Alert } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import styles from './SubscribedCard.styles';

const SubscribedCard = (props) => {
    return(
        <View>
            <TouchableOpacity style={styles.container}>
                <Text> {props.org} </Text>
                <Text style={styles.title}> {props.title} </Text>
                <Image style={styles.image} resizeMode="contain" source={props.source}/>
                <Text style={styles.date}> {props.date} </Text>
                <Text> {props.link} </Text>
            </TouchableOpacity>
        </View>
    )
}

export default SubscribedCard;